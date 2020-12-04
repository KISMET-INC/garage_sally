import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Landing from '../components/Landing.js';
import {Link} from '@reach/router'
import Navbar from '../components/Navbar.js';

const Home = props => {

    return (
        <div className="landingPage-container">
            <header>
                <img src="/img/Group5.png" alt=""/>
                <p>find, post, share</p>
            </header>

            <main>
                <div className="titleHeader-container">
                    <h2>Search for free</h2>
                    <img src="/img/mapIcon.png" alt=""/>
                </div>

                <section>
                    <h3>search and find</h3>
                    <p>Sapien nec maecenas curae posuere leo risus feugiat per erat felis, varius sed odio cubilia purus tellus congue primis quam porttitor curabitur, proin parturient laoreet luctus at platea a scelerisque egestas. Hendrerit habitass</p>
                    <button><Link to="/register">find now</Link></button>
                </section>



                <div className="titleHeader-container">
                    <h2>Post a garage sale</h2>
                </div>

                <section>
                    <h3>post and share</h3>
                    <p>Sapien nec maecenas curae posuere leo risus feugiat per erat felis, varius sed odio cubilia purus tellus congue primis quam porttitor curabitur, proin parturient laoreet luctus at platea a scelerisque egestas. Hendrerit habitass</p>
                    <footer>
                        <p>start posting</p>
                        <button> <Link to="/register">Get Account</Link> </button>
                    </footer>
                </section>
            </main>
            

        </div>
    );   
}
export default Home;