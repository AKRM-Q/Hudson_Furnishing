// Categories.js
// import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import ComingSoon from '../../Pages/ComingSoon';
const Categories = () => {
    return (
        <div className="categories">
            <Link to="/comingsoon" className="category bedroom">
                <h3 className='category-title'>Bed Room</h3>
            </Link>
            <Link to="/comingsoon" className="category homeoffice">
                <h3 className='category-title'>Home Office</h3>
            </Link>
            <Link to="/comingsoon" className="category livingroom">
                <h3 className='category-title'>livingroom</h3>
            </Link>
            <Link to="/comingsoon" className="category diningroom">
                <h3 className='category-title'>Dining Room</h3>
            </Link>
        </div>
    );
}

export default Categories;
