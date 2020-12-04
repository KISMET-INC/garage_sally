import React from 'react';
import {useState, useEffect} from 'react';
import {navigate} from '@reach/router'

const SaleListing = props => {
    const { garage } = props
    const [destination] = useState(`${garage.streetNumber} ${garage.streetName}, ${garage.city}, ${garage.zipcode}`)

    const [image, setImage] = useState("https://maps.googleapis.com/maps/api/staticmap?center=" + destination +"&zoom=18&size=400x300&maptype=roadmap&markers=size:mid%%7C" + destination +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")

    const [date, setDate] = useState()
    const [startTime, setStartTime] = useState()

    useEffect(()=> {

        let temp = new Date(garage.date)
        setDate(temp.toLocaleDateString("en-US"))

        temp = new Date(garage.startTime)
        //setStartTime(temp.toLocaleTimeString("en-US"))
        setStartTime(garage.startTime)

        garage.hasOwnProperty("image") ? setImage(garage.image) : setImage(image)

    },[])

    return (
        <div>

            <div className="allGarageSales-container">
                <div className="garageSaleItem-container">
                <img src= {image} alt="cover"/>
                <div className="info-container">
                    <h3>Date: {date} </h3>
                    <h3>Starts: {startTime}</h3>
                    <h3>Location:</h3>
                    <h4>{destination}</h4>

                    <button onClick={()=> {navigate(`sales/${garage._id}`)}}>Go</button>
                </div>
                </div>
            </div>
            </div>
    );
}
export default SaleListing;