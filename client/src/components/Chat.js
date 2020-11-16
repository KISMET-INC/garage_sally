import React from 'react';
import {useState, useEffect} from 'react';
import io from 'socket.io-client';
import Wrapper from '../context/Context.js'
import '../App.css';

const Chat = props => {
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    
        useEffect(() => {
        //CLIENT
        //socket.on('message_to_client', () => console.log("I just got a ping from the server so I (the client) say this... "));
    
        socket.on("message_from_server", (message_from_server) => {
            console.log(message_from_server);
    
            setMessages(prevMessages => {
            return [message_from_server, ...prevMessages];
            })
        });    
    
        socket.on ('nested_from_server', (message_from_server) => {
            console.log(message_from_server)
        })
    
        socket.emit("message_to_server", "Hello from client")
        
        return () => socket.disconnect(true);
        }, []);
    
        return (
        <div className="App">
            <h1>Socket Test</h1>
            {
            messages.map((msg,i)=> 
                <p>{msg}</p>
            )}
        </div>
        );
    }
export default Chat;