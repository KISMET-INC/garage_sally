import React, {useState, useContext} from 'react'
import {navigate} from "@reach/router"
import {Link} from '@reach/router'
import axios from 'axios';


const Login = props => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState([])

    function submitHandler(e,data){
        e.preventDefault();
        console.log("sign button was click");
        axios.post("http://localhost:8000/api/users/login", data)
        .then(res=>{
            console.log(res)
            let user = res.data
            document.cookie=`user=${user.name}`
            document.cookie=`location=${user.streetNumber} ${user.streetName}, ${user.city}, ${user.zipcode}`

            navigate('/dashboard')
        })
        .catch(err=>console.log(err))
    
    }

    return (

        <div className="regLoginNav-container">

        <nav>
            <Link to="/register"> register</Link>
            <Link to="/login"> login</Link>
        </nav>

        <div className="reg-container">
            <form onSubmit={(e)=> {submitHandler(e, {email, password})}}>

                <input 
                placeholder="email"
                onChange={e => {setEmail(e.target.value)}}
                />

                <input 
                placeholder="password"
                onChange={e => {setPassword(e.target.value)}}
                />

                <button type="submit"> sign in</button>

            </form>
        
        </div>

        </div>
    )
}



export default Login
