import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import {Link, navigate} from '@reach/router'

const LoginReg = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the LoginReg View! </p>
            <Link to="/dashboard"> Goto Dashboard</Link>
        </div>
    );   
}
export default LoginReg;