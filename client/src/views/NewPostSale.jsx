import React, {useState, useEffect} from 'react'
import { Link, navigate } from '@reach/router'
import AddImage from "../components/AddImage"
import axios from "axios"


const NewPostSale = props => {



    const [streetNumber, setStreetNumber] = useState();
    const [streetName, setStreetName] = useState();
    const [city, setCity] = useState();
    const [zipcode, setZipcode] = useState();


    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [stopTime, setStopTime] = useState();
    const [image, setImage] = useState("");

    const [errors, setErrors] = useState();


    const imageHandler = e => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = e => {
            setImage(e.target.result)
        }
    }

    function submitHandler(e){
        console.log("submit button was click")
        e.preventDefault();

        const newGarageSale ={
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            zipcode: zipcode,

            date: date,
            startTime: startTime,
            stopTime: stopTime,

            image: image,
        }

        console.log(newGarageSale)

        axios.post("http://localhost:8000/api/garages/new", newGarageSale)
        .then((res)=>{
            console.log("Did it post?", res);
            navigate("/dashboard")
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response?.data?.errors)
        })
    }



    return (

        <div className="newGarageSale-container">

            <div className="backBTN-container">
                <Link to="/dashboard">	back</Link>
                <img src="/img/Group5.png" alt=""/>
            </div>

            <div className="user-container">
                <img src="/img/placeholder.png" alt=""/>
                <p>Luis Cardona</p>
            </div>

            <nav>
                <Link to="/new-sale"> new sale</Link>
                <Link to="/edit/:id"> re-post</Link>
            </nav>


            <form onSubmit={(e)=> {submitHandler(e)}}>


                <h2>Date Time:</h2>
                {errors?.date && (<p style={{color: "red"}}>
                {errors.date?.message}</p>)}
                <input
                type="date"
                placeholder="date"
                onChange={e => {setDate(e.target.value)}}
                />


                <div className="timeStamp-container">
                    <label>Start Time</label>
                    {errors?.startTime && (<p style={{color: "red"}}>
                    {errors.startTime?.message}</p>)}
                    <input
                    type="time"
                    placeholder="Start Time:"
                    onChange={e => {setStartTime(e.target.value)}}
                    />

                    <label>End Time</label>
                    {errors?.stopTime && (<p style={{color: "red"}}>
                    {errors.stopTime?.message}</p>)}
                    <input
                    type="time"
                    placeholder="End Time:"
                    onChange={e => {setStopTime(e.target.value)}}
                    />
                </div>

                <h2>Location:</h2>
                <div className="addressForm-container">
                    {errors?.streetNumber && (<p style={{color: "red"}}>
                    {errors.streetNumber?.message}</p>)}
                    <input
                    type="number"
                    placeholder="Street #:"
                    onChange={e => {setStreetNumber(e.target.value)}}
                    />

                    {errors?.streetName && (<p style={{color: "red"}}>
                    {errors.streetName?.message}</p>)}
                    <input
                    placeholder="street name:"
                    onChange={e => {setStreetName(e.target.value)}}
                    />
                </div>


                <div className="cityZip-container">
                    {errors?.city && (<p style={{color: "red"}}>
                    {errors.city?.message}</p>)}
                    <input
                    placeholder="City:"
                    onChange={e => {setCity(e.target.value)}}
                    />

                    {errors?.zipecode && (<p style={{color: "red"}}>
                    {errors.zipecode?.message}</p>)}
                    <input
                    placeholder="Zip Code:"
                    onChange={e => {setZipcode(e.target.value)}}
                    />

                </div>
                <h2>Upload Cover:</h2>
                {/* <input
                    placeholder="+ image:"
                    onChange={e => {setImage(e.target.value)}}
                /> */}

                <AddImage imageHandler={imageHandler} />

                <button> Post Sale</button>

            </form>

        </div>
    )
}



export default NewPostSale