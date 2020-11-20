import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link} from '@reach/router';
import '../App.css';
import axios from 'axios';


const Detail = props => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [directions, setDirections] = useState([])
    const [duration, setDuration] = useState("")
    const [distance, setDistance] = useState("")
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState("")
    const [map, setMap] = useState("")
    const [showDirections, setShowDirections] = useState(false)

    useEffect(()=> {

     

        axios.get(`http://localhost:8000/api/garages/${props.sale_id}`)
        .then(res=>{
            let garage = res.data.garage
            // temp used for getting evaluations in order to set into state
            let temp;
            temp = new Date(garage.date)
            setDate(temp.toLocaleDateString("en-US"))

           // setTime(garage.startTime)
            
            let destTemp = `${garage.streetNumber} ${garage.streetName}, ${garage.city}, ${garage.zipcode}`
            setDestination(destTemp)
            
            let origTemp = getCookie("location")
            setOrigin(origTemp)


            setMap("https://maps.googleapis.com/maps/api/staticmap?center=" + destTemp +"&size=400x300&maptype=roadmap&markers=size:mid%7Ccolor:red%7C" + origTemp +"&markers=size:mid%7Ccolor:blue%7C" + destTemp +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")

        
        }).catch(err=>console.log(err))
        
    },[]) // END USE EFFECT

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const getDirections=(e)=> {
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
            setShowDirections(true)    

        }).catch(err=>console.log(err))
    } // END GET DURATION


    return (
            <div className="garageInfo-container">
    
                <div className="backBTN-container">
                    <Link to="/dashboard">	back</Link>
                    <img src="/img/Group5.png" alt=""/>
                </div>
    
                <div className="postInfo-container">
                    <h1>{date}</h1>
                    <div className="rate-container">
                     <p>by:  </p>
                        <Link to="/rate">Rate</Link>
                    </div>
    
                    <img src={map} alt=""/>
    
                    
                    <h2>Visitors: 50 people</h2>
                    <button>check in</button>
                    <div className="infoOptions-container">
                        <Link to="/share">share</Link>
                        <Link to="/favorite">favorite</Link>
                    </div>
    
                </div>
    
                <button onClick ={getDirections}> Get directions</button>

                {
                    showDirections && directions.map((items,i)=>
                        <div>
                            <div key={i} dangerouslySetInnerHTML={{__html: `${items}`}} />
                        </div>
                    )
                }   
            </div>
        )
}

export default Detail;