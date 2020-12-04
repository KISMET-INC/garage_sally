import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import Landing from '../components/Landing.js';
import {Link, navigate} from '@reach/router'
import Navbar from '../components/Navbar.js';


const New = props => {
    return (
        <div>
            <Navbar />
            <h2>Add your Garage Sale</h2>
            <form>
                <div>
                    <label htmlFor ="address">Address:</label>
                    <input type ='text' name='address'></input>
                </div>

                <div>
                    <label htmlFor ="Date">Date:</label>
                    <input type ='date' name='date'></input>
                </div>
                <input onClick ={(e)=> {navigate('/dashboard')}} type ='submit' value= 'Post Sale'></input>
            </form>

        </div>
    );
}
export default New;