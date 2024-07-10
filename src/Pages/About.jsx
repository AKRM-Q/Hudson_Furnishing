// import React from 'react';
import './About.css'
import about from "../images/About.webp";
import { FaChevronCircleDown } from "react-icons/fa";
import BackToTop from '../Components/BackToTop/BackToTop';
const About = () => {
    return (
    <>
    <BackToTop />
        <div className="header-banner">
            <div className="header-banner-content">
                <h1>about us</h1>
                <p>Discover the story behind Hudson Furnishing</p>
            </div>
        </div>
        <div className="about-us">
            <img className='about-img' src={about} alt="" />
            <div className="about-content">
                <h2>about us</h2>
                <p><span className='about-us-donts'><FaChevronCircleDown /></span>
                Hudson Furnishings is a furniture shop that specializes 
                    in all home furniture needs. We are a furniture 
                    shop, a bedroom furniture store, a sofa store, 
                    a mattress shop, and a kitchen furniture store,
                     with an emphasis on interior design. We are the 
                     only Palliser custom order studio, which offers 
                     more than 300 different fabrics or leathers to 
                     meet all your furniture needs.</p>
                     <p><span className='about-us-donts'><FaChevronCircleDown /></span>
                     Our goal is to take off some of the stress that 
                        comes with overwhelming amount of furniture in 
                        the market to provide you with a pleasant shopping 
                        experience.</p>
                    {/* <button className='read-more'>More</button> */}
            </div>
        </div>
    </>
    );
}

export default About;
