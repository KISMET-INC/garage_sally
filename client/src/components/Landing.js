import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';

const Landing = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the Landing Page Component! {context.state} </p>
        </div>
    );   
}
export default Landing;