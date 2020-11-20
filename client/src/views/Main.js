import React from 'react';
import {useContext} from 'react';
import UserContext from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';

const Main = props => {
    const context = useContext(UserContext)

    return (
        <div>
            <p>im the MAIN! </p>
            <Component />
        </div>
    );   
}
export default Main;