import  { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'
const Footer = () => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());
    const [location, setLocation] = useState('Loading location...');

    useEffect(() => {
        // Update the date and time every second
        const intervalId = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);

        // Get the user's location
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        }, () => {
            setLocation('Location not available');
        });

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='footer'>
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>CONTACT US</h4>
                        <div className="address">
                            <p><span>address :   </span>28 Green Tower<br />
                            New York City, USA</p>
                        </div>
                        <div className="call-phone">
                            <p><span>call-phone :   </span>012345 - 123456789</p>
                        </div>
                        <div className="email">
                            <p><span>Email :   </span>Hudson@gmail.com</p>
                        </div>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>CATEGORIES</h4>
                        <Link to="/"><p>Living Room</p></Link>
                        <Link to="/"><p>Dining Room</p></Link>
                        <Link to="/"><p>Bedroom</p></Link>
                        <Link to="/"><p>Home Office</p></Link>
                        <Link to="/"><p>Out Door</p></Link>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>RESOURCES</h4>
                        <Link to="/"><p>Bestselling Furniture</p></Link>
                        <Link to="/"><p>In-Stock Furniture</p></Link>
                        <Link to="/"><p>Furniture Under $1,000</p></Link>
                        <Link to="/"><p>Furniture Design Styles</p></Link>
                        <Link to="/"><p>Brands & Collections</p></Link>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>COMPANY</h4>
                        <Link to="/"><p>Store Locations</p></Link>
                        <Link to="/"><p>Design Services</p></Link>
                        <Link to="/"><p>Trade Program</p></Link>
                        <Link to="/"><p>Made In The USA</p></Link>
                        <Link to="/"><p>About Hudson</p></Link>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>CUSTOMER SERVICE</h4>
                        <Link to="/faqs">FAQs</Link>
                        <Link to="/sitemap"><p>Site Map</p></Link>
                        <Link to="/gallery"><p>Gallery</p></Link>
                        <Link to="/"><p>Track Delivery</p></Link>
                        <Link to="/"><p>Shipping Information</p></Link>
                    </div>
                </div>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>&copy;{new Date().getFullYear()} Akrm Alqubari</p>
                    </div>
                    <div className="sb_footer-below-links">
                        <Link to="/"><div><p>Terms & Conditions</p></div></Link>
                        <Link to="/"><div><p>Privacy</p></div></Link>
                        <Link to="/"><div><p>Security</p></div></Link>
                        <Link to="/"><div><p>Cookie Declaration</p></div></Link>
                    </div>
                </div>
                <div className="ticker">
                    <div className="ticker__content">
                        <span className='trick'>Time : {dateTime}</span>
                        <span className='trick'>Location : {location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
