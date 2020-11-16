import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';

const Component = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the component! {context.state} </p>
        </div>
    );   
}
export default Component;