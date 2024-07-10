// import React from 'react';
import './Offers.css'
import { Link } from 'react-router-dom';
const Offers = () => {
    return (
            <div className="offers">
                <div className="offers-content">
                    <h2>Special Offer</h2>
                    <p>Dont miss out on our special offers!</p>
                    <Link to='/'><button className="offers-button">Shop Now</button></Link>
                </div>
            </div>
    );
}

export default Offers;
