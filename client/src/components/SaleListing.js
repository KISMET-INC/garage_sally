import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import {Link} from '@reach/router'

const garageListStyle ={
    border: "2px solid black",
    width: 300,
    margin: '0 auto',
    marginBottom: 30,
}
const SaleListing = props => {
    const context = useContext(Wrapper)

    return (
        <div style={garageListStyle} >
            <p> Date: Saturday, June 14th, 2020 </p>
            <p> Visitors: 13 </p>
            <p> Location: <Link to ={`/sales/${props.saleID}`}>2332 Greenbiar Ct, 92233 </Link></p>
        </div>
    );   
}
export default SaleListing;