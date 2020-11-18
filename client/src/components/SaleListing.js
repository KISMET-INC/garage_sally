import React from 'react';
import {useContext, useState} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import {Link} from '@reach/router'

const garageListStyle ={
    border: "2px solid black",
    width: 300,
    margin: '0 auto',
    marginBottom: 30,
}

const SaleListing = props => {
    const [userAddress,setUserAddress] = useState("27115+Cottonwood+Ave,+Moreno+Valley,+CA,+92555")
    const [address,setAddress] = useState("26345+Cottonwood+Ave,+Moreno+Valley,+CA,+92555")
    const [formatedAddress,setFormattedAddress] = useState("")
    const [map, setMap] = useState("https://maps.googleapis.com/maps/api/staticmap?center=" + address +"&size=300x300&maptype=roadmap&markers=size:mid%7Ccolor:red%7C" + address +"&markers=size:mid%7Ccolor:blue%7C" + userAddress +" &key=AIzaSyDtBfh4oT2KQFP4ZFEhxTFswcaseauM_zg")

   
    return (
        <div style={garageListStyle} >
            
            <img src={map}/>
            <p> Date: Saturday, June 14th, 2020 </p>
            <p> Visitors: 13 </p>
            <p> Location: <Link to ={`/sales/${props.saleID}`}>2332 Greenbiar Ct, 92233 </Link></p>
        </div>
    );   
}
export default SaleListing;