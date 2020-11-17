import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Landing from '../components/Landing.js';
import {Link} from '@reach/router'
import Navbar from '../components/Navbar.js';

const Home = props => {

    return (
        <div>
            <Navbar />
            <Landing />
        </div>
    );   
}
export default Home;