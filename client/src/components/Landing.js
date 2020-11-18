import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import { Link, navigate } from '@reach/router';


const Landing = props => {

    return (
        <div>
            <h2>We help you find garage sales near you!</h2>
            <Link to = "/login">Login or Register </Link>
        </div>
    );   
}
export default Landing;