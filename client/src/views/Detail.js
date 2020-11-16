import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import {Link} from '@reach/router'

const Detail = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the Detail View! </p>
            <Link to ="/sales">Return to All Sales</Link> | 
            <Link to ="/dashboard"> Return to Dashboard</Link>
            <p>Sale {props.sale_id}</p>
            <p>12233 Garrison Drive</p>
            <p>Saturday, July 19, 1980</p>
        </div>
    );   
}
export default Detail;