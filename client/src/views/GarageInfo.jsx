import React from 'react'
import {Link} from '@reach/router'


const GarageInfo = props => {
    return (
        <div className="garageInfo-container">

            <div className="backBTN-container">
                <Link to="/dashboard">	back</Link>
                <img src="/img/Group5.png" alt=""/>
            </div>

            <div className="postInfo-container">
                <h1>Saturday, July 19, 2020</h1>
                <div className="rate-container">
                    <p>by: Luis Cardona</p>
                    <Link to="/rate">Rate</Link>
                </div>

                <img src="https://performancedrive.com.au/wp-content/uploads/2016/08/Google-Maps.jpg" alt=""/>

                
                <h2>Visitors: 50 people</h2>
                <button>check in</button>
                <div className="infoOptions-container">
                    <Link to="/share">share</Link>
                    <Link to="/favorite">favorite</Link>
                </div>

            </div>

            <button> Get directions</button>

         
            
        </div>
    )
}



export default GarageInfo
