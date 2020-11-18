import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from "axios"


const Registration = props => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errors, setErrors] = useState();


    function submitHandler(e){
        console.log("submit button was click")
        e.preventDefault();

        const newUser ={
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword

        }

        console.log(newUser);

        axios.post("http://localhost:8000/api/user", newUser)
        .then((res)=>{
            console.log(res);
            navigate("/dashboard")
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response?.data?.errors)
        })
    }



    return (

        <div className="regLoginNav-container">
            <nav>
                <Link to="/register"> register</Link>
                <Link to="/login"> login</Link>
            </nav>
      
            <div className="reg-container">

            <form onSubmit={(e)=> {submitHandler(e)}}>

                {errors?.name && (<p style={{color: "red"}}>{errors.name?.message}</p>)}
                <input 
                placeholder="name"
                onChange={e => {setName(e.target.value)}}
                />


                {errors?.email && (<p style={{color: "red"}}>{errors.email?.message}</p>)}
                <input 
                placeholder="email"
                onChange={e => {setEmail(e.target.value)}}
                />


                {errors?.password && (<p style={{color: "red"}}>{errors.password?.message}</p>)}
                <input 
                type="password"
                placeholder="password"
                onChange={e => {setPassword(e.target.value)}}
                />

                {errors?.confirmPassword && (<p style={{color: "red"}}>{errors.confirmPassword?.message}</p>)}
                <input 
                type="password"
                placeholder="confirm password"
                onChange={e => {setConfirmPassword(e.target.value)}}
                />

                <button> Register</button>

            </form>         
        </div>

        </div>
    )
}



export default Registration
