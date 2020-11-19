import React, { useEffect } from 'react';
import {useState} from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js';
import axios from 'axios';

//Hard coded user address
const userAddress = "27115 CottonWood Ave, Moreno Valley, CA, 92555"
const x  = true
//Temp styling
const flex = {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left'
}



const Detail = props => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [directions, setDirections] = useState([])
    const [duration, setDuration] = useState("")
    const [distance, setDistance] = useState("")
    const [origin, setOrigin] = useState(userAddress)
    const [destination, setDestination] = useState("")
    const [map, setMap] = useState("")
    const [showDirections, setShowDirections] = useState(false)

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/garages/${props.sale_id}`)
        .then(res=>{

            let tempDate = new Date(res.data.garage.datetime)
            setDate(tempDate.toLocaleDateString("en-US"))

            let tempTime = new Date(res.data.garage.datetime)
            setTime(tempTime.toLocaleTimeString("en-US"))

            setDestination(`${res.data.garage.location}`)
            setOrigin(origin)

            setMap("https://maps.googleapis.com/maps/api/staticmap?center=" + res.data.garage.location +"&size=400x300&maptype=roadmap&markers=size:mid%7Ccolor:red%7C" + origin +"&markers=size:mid%7Ccolor:blue%7C" + res.data.garage.location +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")

            const destination = res.data.garage.location 
            getDuration(destination)   

        }).catch(err=>console.log(err))
        
    },[]) // END USE EFFECT

    const getDuration=(destination)=> {
        const proxyurl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key=AIzaSyBxXGgE0EvGPyn5mabnmvBl_p8Qpm5k9Kw";

        axios.get(proxyurl) 
        .then(res=>{

            const directionsArr = []
            for(var i = 0; i < res.data.routes[0].legs[0].steps.length; i++ ){
                directionsArr.push(res.data.routes[0].legs[0].steps[i].html_instructions)
            }
            setDirections(directionsArr)

            setDuration(res.data.routes[0].legs[0].duration.text)
            setDistance(res.data.routes[0].legs[0].distance.text)    

        }).catch(err=>console.log(err))
    } // END GET DURATION


    const showDirects =() => {
        setShowDirections(true)
    }


    return (
        <div>

        <Navbar />
        <div>
            <div style = {flex}>
                <h3>Distance: {distance}</h3>
                <h3>Duration: {duration}</h3>
            </div>
        </div>
            
        <img src={map}></img>
        <h3>{destination}</h3>
        <h2>{date}</h2>
        <p><button onClick={e => showDirects(e)}>Get Directions</button> </p>

        <div style= {flex}>
            <div>
                <h3>Start Time:</h3>
                <p>{time}</p>
            </div>
            <div>
                <h3>End Time:</h3>
                <p>{time}</p>
            </div>
        </div>

        {
            showDirections && <h3>Directions: </h3>
        }
        {
            showDirections && directions.map((items,i)=>
                <div>
                    <div key={i} dangerouslySetInnerHTML={{__html: `${items}`}} />
                </div>
            )
        }
        </div>
    );
}
export default Detail;