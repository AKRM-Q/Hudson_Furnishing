// src/ComingSoon.jsx
import React from 'react';
import './ComingSoon.css';
import BackToTop from '../Components/BackToTop/BackToTop';


const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <BackToTop />
      <div className="shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>
      <div className="content">
        <h1 className='comingsoon-title'>Coming Soon</h1>
        <p className='comingsoon-par'>We're crafting beautiful furniture for your home. Stay tuned!</p>
        <div className="countdown">
          <div className="countdown-item">
            <span>12</span> Days
          </div>
          <div className="countdown-item">
            <span>08</span> Hours
          </div>
          <div className="countdown-item">
            <span>45</span> Minutes
          </div>
          <div className="countdown-item">
            <span>30</span> Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
