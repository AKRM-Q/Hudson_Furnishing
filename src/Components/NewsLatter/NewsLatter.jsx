// import React from 'react';
import { useState } from 'react';
import './NewsLatter.css'
const NewsLatter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = () => {
        if (email) {
            // يمكنك هنا إضافة رمز المرحلة الأخيرة لإرسال بريد إلكتروني أو تنفيذ الإجراء المناسب بمجرد الضغط على زر الاشتراك
            setMessage(`Successfully subscribed! Thank you: ${email}`);
        } else {
            setMessage('Please enter your email!');
        }
    };
    return (
        <div className="news-latter">
        <div className="news-latter-content">
            <h2 className="news-latter-title">Subscribe now and get a 20% discount</h2>
            <p className="news-latter-text">Don't miss this great opportunity to improve your home at discounted prices!</p>
            <div className="subscribe-form">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="subscribe-button" onClick={handleSubscribe}>Subscribe now</button>
            </div>
            {message && <p className="subscription-message">{message}</p>}
        </div>
    </div>
    );
}

export default NewsLatter;
