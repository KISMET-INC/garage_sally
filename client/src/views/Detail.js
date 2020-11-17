import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import {Link} from '@reach/router'
import Navbar from '../components/Navbar.js';


const Detail = props => {
    const context = useContext(Wrapper)
    return (
        <div>
            <Navbar />
            <h2>12233 Garrison Drive <button>Get Directions</button> </h2>
            <h1>Saturday, July 19, 1980</h1>
            <p>Sale id: {props.sale_id}</p>
            <p> Visitors: 13  <button>CheckIn</button> </p>
            <p> Hosted by: DealLover99 <button>Rate This Host</button> </p>

            
            <button>Share this Link</button>
            <button>Add to Favorites</button>
            
        </div>
    );   
}
export default Detail;