import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import {Link} from '@reach/router'
import Navbar from '../components/Navbar.js';
import AllSales from './AllSales.js';

const Dashboard = props => {
    return (
        <div>
            <Navbar />
            <h2>Welcome [User] ! </h2> 

            <label htmlFor="search"> Search by ZipCode </label>
            <input type ='text'></input>

            <AllSales />
        </div>
    );   
}
export default Dashboard;