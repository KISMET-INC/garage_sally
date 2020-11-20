import React from 'react';
import {useState, useEffect} from 'react';
import {navigate} from '@reach/router'

const SaleListing = props => {
    const {garage} = props
    const [destination] = useState(garage.location)

    const [map] = useState("https://maps.googleapis.com/maps/api/staticmap?center=" + destination +"&zoom=18&size=400x300&maptype=roadmap&markers=size:mid%%7C" + destination +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")

    const [date, setDate] = useState()
    const [time, setTime] = useState()

    useEffect(()=> {

        let tempDate = new Date(garage.date)
        setDate(tempDate.toLocaleDateString("en-US"))

        let tempTime = new Date(garage.date)
        setTime(tempTime.toLocaleTimeString("en-US"))

    },[])

    return (
        <div>

            <div className="allGarageSales-container">
                <div className="garageSaleItem-container">
                <img src= {map} alt=""/>
                    <div className="info-container">
                        <h3>Date: {date}</h3>
                        <h3>Time: {time}</h3>
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