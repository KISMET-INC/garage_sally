import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from './Component.js';
import {Link} from '@reach/router'
import Navbar from './Navbar.js';
import SaleListing from './SaleListing.js';


const AllSales = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <h2>Garage Sales Near You!</h2>
            <SaleListing saleID={1}/>
            <SaleListing saleID={2}/>
            <SaleListing saleID={3}/>
        </div>
    );   
}
export default AllSales;