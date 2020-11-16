import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import {Link} from '@reach/router'

const Dashboard = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the Dashboard View! </p>
            <Link to = "/sales">See all Garage Sales</Link>
        </div>
    );   
}
export default Dashboard;