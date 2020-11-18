import React, {useState} from 'react'
import {navigate} from "@reach/router"
import {Link} from '@reach/router'



const Login = props => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function submitHandler(e){
        console.log("sign button was click");
        navigate("/dashboard")
    }




    return (

        <div className="regLoginNav-container">

        <nav>
            <Link to="/register"> register</Link>
            <Link to="/login"> login</Link>
        </nav>



        <div className="reg-container">

           
            <form onSubmit={(e)=> {submitHandler(e)}}>

                <input 
                placeholder="email"
                onChange={e => {setEmail(e.target.value)}}
                />

                <input 
                placeholder="password"
                onChange={e => {setPassword(e.target.value)}}
                />


             <button> sign in</button>

            </form>
        
        </div>

        </div>
    )
}



export default Login
