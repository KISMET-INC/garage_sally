import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from "axios"


const NewPostSale = props => {

    const [dateTime, setDateTime] = useState();
    const [location, setLocation] = useState();
    const [errors, setErrors] = useState();


    function submitHandler(e){
        console.log("submit button was click")
        e.preventDefault();

        const newGarageSale ={
            dateTime: dateTime,
            location: location,
         
        }


        axios.post("http://localhost:8000/api/user", newGarageSale)
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

        <div className="newGarageSale-container">

            <div className="backBTN-container">
                <Link to="/dashboard">	back</Link>
                <img src="/img/Group5.png" alt=""/>
            </div>

            <div className="user-container">
                <img src="/img/placeholder.png" alt=""/>
                <p>Luis Cardona</p>
            </div>



            <nav>
                <Link to="/new-sale"> new sale</Link>
                <Link to="/edit/:id"> re-post</Link>
            </nav>
      

            <form onSubmit={(e)=> {submitHandler(e)}}>

                {errors?.name && (<p style={{color: "red"}}>{errors.name?.message}</p>)}
                <input 
                type="datetime-local"
                placeholder="date"
                onChange={e => {setDateTime(e.target.value)}}
                />

                {errors?.email && (<p style={{color: "red"}}>{errors.email?.message}</p>)}
                <input 
                placeholder="address:"
                onChange={e => {setLocation(e.target.value)}}
                />


                
                {errors?.email && (<p style={{color: "red"}}>{errors.email?.message}</p>)}
                <input 
                placeholder="image url"
                onChange={e => {setLocation(e.target.value)}}
                />


            


                <button> Post Sale</button>

            </form>         

        </div>
    )
}



export default NewPostSale
