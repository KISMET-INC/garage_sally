import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import {Link, navigate} from '@reach/router'
import Navbar from '../components/Navbar.js';
import LoginForm from '../components/LoginForm.js';

const LoginReg = props => {

    return (
        <div>
            <Navbar />
            <LoginForm />
        </div>
    );   
}
export default LoginReg;