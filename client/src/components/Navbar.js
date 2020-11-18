import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import { Link, navigate } from '@reach/router';

const Navbar = props => {

    return (
        <div className="navStyle">
            <h2>Garage Sally</h2> 
            <div>
                <Link to = "/start"> Logout</Link> | 
                <Link to ="/dashboard"> Return to Dashboard</Link> | 
                <Link to = "/sales/new"> Post Your Sale</Link>  
            </div>
        </div>
    );   
}
export default Navbar;