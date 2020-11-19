import React, { useEffect } from 'react';
import {useContext, useState} from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js';
import axios from 'axios';

const userAddress = "27115 CottonWood Ave, Moreno Valley, CA, 92555"
const detailStyle = {
    display: 'flex',
}

const Detail = props => {
    const[date, setDate] = useState();
    const[time, setTime] = useState();
    const[directions, setDirections] = useState([])
    const[duration, setDuration] = useState("")
    const[distance, setDistance] = useState("")
    const[origin, setOrigin] = useState(userAddress)
    const[destination, setDestination] = useState("")
    const[map, setMap] = useState("")
    const[loaded, setLoaded] = useState(false)

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/garages/5fb5e95b1e5c832a885398d7`)
        .then(res=>{
            let tempDate = new Date(res.data.garage.datetime)
            setDate(tempDate.toLocaleDateString("en-US"))
            let tempTime = new Date(res.data.garage.datetime)
            setTime(tempTime.toLocaleTimeString("en-US"))
            setDestination(`${res.data.garage.location}`)
            setOrigin(origin)
            setMap("https://maps.googleapis.com/maps/api/staticmap?center=" + res.data.garage.location +"&size=300x300&maptype=roadmap&markers=size:mid%7Ccolor:red%7C" + origin +"&markers=size:mid%7Ccolor:blue%7C" + res.data.garage.location +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")
            setLoaded(true)
            
        }).catch(err=>console.log(err))
        

    },[])


    const getDirections=(e)=> {

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        axios.get(proxyurl + "https://maps.googleapis.com/maps/api/directions/json?origin="+ origin + "&destination="+destination+"&key=AIzaSyBxXGgE0EvGPyn5mabnmvBl_p8Qpm5k9Kw")
        .then(res=>{
            const directionsArr = []
            for(var i = 0; i < res.data.routes[0].legs[0].steps.length; i++ ){
                console.log(res.data.routes[0].legs[0].steps[i].html_instructions)
                directionsArr.push(res.data.routes[0].legs[0].steps[i].html_instructions)
            }
            setDirections(directionsArr)
            setDuration(res.data.routes[0].legs[0].duration.text)
            setDistance(res.data.routes[0].legs[0].distance.text)         
            setLoaded(true)    
        })
        .catch(err=>console.log(err))

    }



    return (
        <div>
            <Navbar />
            <div style={detailStyle}>
                <div>
                    <h1>{destination}</h1>
                    <h2>{date}</h2>
                    <p>Start Time:</p>
                    <h2>{time}</h2>
                    <p>End Time:</p>
                    <h2>{time}</h2>
                </div>

                {
                    loaded &&  <img src={map}></img>
                }

            </div>

            <p><button onClick={e => getDirections(e)}>Get Directions</button> </p>
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
            <p>Directions: </p>
            {
                directions.map((items,i)=>
                    <div dangerouslySetInnerHTML={{__html: `${items}`}} />
                )
            }


        </div>
    );
}
export default Detail;