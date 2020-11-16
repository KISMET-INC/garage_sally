import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import {Link} from '@reach/router'

const AllSales = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the AllSales View! </p>
            <Link to ="/dashboard"> Return to Dashboard</Link>
            <p><Link to ="/sale/1">See details about sale 1!</Link></p>
            <p><Link to ="/sale/2">See details about sale 2!</Link></p>
            <p><Link to ="/sale/3">See details about sale 3!</Link></p>
        </div>
    );   
}
export default AllSales;