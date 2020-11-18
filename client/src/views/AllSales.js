import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import {Link} from '@reach/router'
import SaleListing from '../components/SaleListing.js';


const AllSales = props => {

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