import React, { useEffect } from 'react';
import {useContext, useState} from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js';
import axios from 'axios';

const Detail = props => {
    const[directions, setDirections] = useState([])
    const[duration, setDuration] =useState("")
    const[distance, setDistance] =useState("")
    const[origin, setOrigin]= useState("26345 CottonWood Ave, Moreno Valley, CA, 92555")
    const[destination, setDestination]= useState("27115 CottonWood Ave, Moreno Valley, CA, 92555")
    const[map, setMap] = useState("")


    useEffect(()=> {
        setOrigin(origin.replaceAll(' ','+'))
        setDestination(destination.replaceAll(' ','+'))
        setMap("https://maps.googleapis.com/maps/api/staticmap?center=" + destination +"&size=300x300&maptype=roadmap&markers=size:mid%7Ccolor:red%7C" + origin +"&markers=size:mid%7Ccolor:blue%7C" + destination +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")
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
        })
        .catch(err=>console.log(err))
    }



    return (
        <div>
            <Navbar />
            <h1>Saturday, July 19, 1980</h1>
            <h2>12233 Garrison Drive <button>Rate This Sale</button> </h2>
            <p> Visitors: 13  <button>CheckIn</button> </p>
            <p> Hosted by: DealLover99 </p>
            
            <button>Share this Link</button>
            <button>Add to Favorites</button>

            <p><button onClick={e => getDirections(e)}>Get Directions</button> </p>
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
            <p>Directions: </p>
            {
                directions.map((items,i)=> 
                    <div dangerouslySetInnerHTML={{__html: `${items}`}} />
                )
            }
            <img src ={map}></img>
        </div>
    );   
}
export default Detail;