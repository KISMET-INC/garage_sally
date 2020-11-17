import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import { Link, navigate } from '@reach/router';


const LoginForm = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <h2>Login</h2>
            <form >
                <div>
                    <label htmlFor ="email">Email: </label>
                    <input type ='text' name='email'></input>
                </div>

                <div>
                    <label htmlFor ="password">Password: </label>
                    <input type ='text' name='password'></input>
                </div>

                <input type ='submit' onClick={(e)=> navigate('/dashboard')} value= 'Login'></input>
                </form>

        </div>
    );   
}
export default LoginForm;