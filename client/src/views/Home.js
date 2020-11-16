import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import Landing from '../components/Landing.js';
import {Link} from '@reach/router'

const Home = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the Home View!</p>
            <h2>Welcome to Garage Sally</h2>
            <Landing />
            <Link to = "/start">Login or Register </Link>
        </div>
    );   
}
export default Home;