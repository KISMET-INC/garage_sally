import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import {Link} from '@reach/router'
import Navbar from '../components/Navbar.js';
import AllSales from '../components/AllSales.js';

const Dashboard = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <Navbar />
            <h2>Welcome [User] ! </h2> <div>
                <label htmlFor="search"> Search by ZipCode </label>
                <input type ='text'></input> 
                
               <AllSales />
            </div>
           
        </div>
    );   
}
export default Dashboard;