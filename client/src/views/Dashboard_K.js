import React, { useEffect, useState, useContext } from 'react';
import {Link} from '@reach/router'
import SaleListing from '../components/SaleListing';
import axios from 'axios';

const Dashboard = props => {
    const [garageList, setGarageList] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/garages/")
        .then(res=>{
            console.log(res)
            setGarageList(res.data.garages)
        })
        .catch(err=>console.log(err))
    },[])

    return (
		<div className="dashboard-container">
			<img src="/img/Group5.png" alt="" />

			<div className="postSale-container">
				<img src="/img/placeholder.png" alt="" />
				<Link to="/re-post">re-post</Link>
				<Link to="/new-sale">Post Sale</Link>
			</div>

			<div className="search-container">
				<footer>
					<select>
						<option value="zip code">zip code</option>
						<option value="city">city</option>
					</select>
					<input type="text" placeholder="search" />
				</footer>
			</div>
			{
                garageList.map((garage,i)=>
                    <SaleListing key={i} garage={garage}/>
                )
            }
			{/* <div className="allGarageSales-container">
                <div className="garageSaleItem-container">
                <img src="http://northwrightcounty.today/wp-content/uploads/2016/05/garage-sale-driveway.jpg" alt=""/>
                    <div className="info-container">
                        <h3>Date: date here</h3>
                        <h3>Time: date here</h3>
                        <h3>Location: </h3>
                        <h4>date here</h4>
                        <button>Go</button>
                    </div>
                </div>

                <div className="garageSaleItem-container">
                <img src="http://henryfuentes.com/wp-content/uploads/2015/12/garage-sale.jpg" alt=""/>
                    <div className="info-container">
                        <h3>Date: date here</h3>
                        <h3>Time: date here</h3>
                        <h3>Location: </h3>
                        <h4>date here</h4>
                        <button>Go</button>
                    </div>
                </div>


                <div className="garageSaleItem-container">
                <img src="https://www.razorbackmoving.com/wp-content/uploads/2018/04/yard-sale.jpg" alt=""/>
                    <div className="info-container">
                        <h3>Date: date here</h3>
                        <h3>Time: date here</h3>
                        <h3>Location: </h3>
                        <h4>date here</h4>
                        <button>Go</button>
                    </div>
                </div>

            </div>

            <AllSales /> */}
		</div>
	);
}
export default Dashboard;