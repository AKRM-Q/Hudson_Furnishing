// import React from 'react';
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import BackToTop from "../Components/BackToTop/BackToTop";

const Contact = () => {
  return (
    <>
        <BackToTop />
      <div className="header-banner">
        <div className="header-banner-content">
          <h1>contact us</h1>
          <p>Get in touch with Hudson Furnishing</p>
        </div>
      </div>
      <div className="contact-us">
        <form action="#">
          <h1 className="sub-heading">Need Support</h1>
          <p className="para">Contact us for a quote , help to join them</p>
          <input className="input" type="text" placeholder="Your Name" />
          <input className="input" type="text" placeholder="Your Email" />
          <input className="input" type="text" placeholder="Your Subject" />
          <textarea className="input" cols={30} rows={5}></textarea>
          <input
            className="input-submit"
            type="submit"
            value={"Send Message"}
          />
        </form>
        <div className="map-container">
          <div className="mapbg"></div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.105846727358!2d77.20234928715821!3d28.568968099999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30fa17f505d%3A0x1b01e9cd9848a19b!2sWooden%20Street-%20Furniture%20Shop%2FStore%20in%20South%20Extension%2C%20Delhi!5e0!3m2!1sen!2s!4v1719662836698!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact-method">
        <div className="method">
          <div className="contact-icons">
            <FaLocationDot />
          </div>
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <p className="para">
              Block H, Third Floor
              <br />
              A-13, South
            </p>
          </article>
        </div>
        <div className="method">
          <div className="contact-icons">
            <MdEmail />
          </div>
          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <p className="para">Hedsun@gmail.com</p>
          </article>
        </div>
        <div className="method">
          <div className="contact-icons">
            <MdOutlineSmartphone />
          </div>
          <article className="text">
            <h1 className="sub-heading">Call-Phone</h1>
            <p className="para">012345 - 123456789</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Contact;
