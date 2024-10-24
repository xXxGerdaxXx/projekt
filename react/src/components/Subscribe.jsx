import React from 'react';
import notificationIcon from '../assets/images/notification.svg'; // Adjust the path based on your project structure
import mailIcon from '../assets/images/mail.svg'; // Adjust the path based on your project structure

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <div className="subscribe-left">
          <div className="subscribe-image">
            <img src={notificationIcon} alt="Notification Icon" />
          </div>
          <h2 className="subscribe-title">Subscribe to our newsletter</h2>
          <h3 className="subscribe-description">
            Subscribe to our newsletter to stay informed about latest updates
          </h3>
        </div>

        <div className="subscribe-right">
          <div className="envelope-icon-container">
            <img className="envelope-icon" src={mailIcon} alt="Envelope Icon" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
