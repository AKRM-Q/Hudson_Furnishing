// import React from 'react';
import './Faqs.css';
import BackToTop from '../Components/BackToTop/BackToTop';

function Faqs() {
  return (

    
    <div className="faq-section">
      <BackToTop />
      <div className="faqs-header-banner">
          <div className="faqs-header-banner-content">
              <h1>faqs</h1>
              <p>Find answers to common questions about Hudson Furnishing</p>
          </div>
      </div>
      <h2 className="faq-header">Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3 className="faq-question">How do I place an order?</h3>
        <p className="faq-answer">To place an order, simply browse our catalog, select the items you want, and proceed to checkout.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What payment methods do you accept?</h3>
        <p className="faq-answer">We accept all major credit cards, PayPal, and bank transfers.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">How can I track my order?</h3>
        <p className="faq-answer">Once your order ships, youll receive a tracking number via email.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Do you offer international shipping?</h3>
        <p className="faq-answer">Yes, we offer international shipping to select countries. Please check our shipping policy for details.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What is your return policy?</h3>
        <p className="faq-answer">We offer a 30-day return policy. Items must be unused and in their original packaging.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Can I cancel my order?</h3>
        <p className="faq-answer">You can cancel your order within 24 hours of placing it, provided it hasnt been shipped yet.</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">How do I contact customer support?</h3>
        <p className="faq-answer">You can reach our customer support team via email at <a href="mailto:support@example.com">support@example.com</a> or through our live chat on the website.</p>
      </div>

    </div>
  );
}

export default Faqs;
