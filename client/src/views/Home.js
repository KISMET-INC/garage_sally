import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import Landing from '../components/Landing.js';
import {Link} from '@reach/router'
import Navbar from '../components/Navbar.js';



const Home = props => {
    const context = useContext(Wrapper)

    return (
        <div>
           <Navbar />
            <Landing />
        </div>
    );   
}
export default Home;