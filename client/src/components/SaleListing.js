import React from 'react';
import {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router'


const garageobj = {
    _id: 1,
    location: {
        street: "26345 Cottonwood",
        city: "Moreno Valley",
        state: "CA",
        zipcode: "92555"
    },
    dateTime: Date
    
}

const userAddress = "500 Sea World Dr, San Diego, CA 92109"


const SaleListing = props => {
    const [origin,setOrigin] = useState(userAddress)
    const [garage, setGarage] = useState(garageobj)
    const [destination,setDestination] = useState(`${garage.location.street} ${garage.location.city} ${garage.location.state} ${garage.location.zipcode}`)
    const [map, setMap] = useState("https://maps.googleapis.com/maps/api/staticmap?center=" + destination +"&size=400x300&maptype=roadmap&markers=size:mid%7Ccolor:red%7C" + origin +"&markers=size:mid%7Ccolor:blue%7C" + destination +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [id, setId] = useState(garage._id)
    

    return (

            <div className="allGarageSales-container">
                <div className="garageSaleItem-container">
                <img src= {map} alt=""/>
                    <div className="info-container">
                        <h3>Date: {date}</h3>
                        <h3>Time: {time}</h3>
                        <h3>Location:</h3>
                        <h4>{destination}  </h4>
                        <button onClick={(e)=>{navigate(`/sales/${id}`)}}>Go</button>   
                        
                    </div>
                </div>
            </div>
    );   
}
export default SaleListing;