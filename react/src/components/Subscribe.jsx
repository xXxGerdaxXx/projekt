import React, { useState } from 'react';
import notificationIcon from '../assets/images/notification.svg';
import mailIcon from '../assets/images/mail.svg';
import Modal from './Modal'; // Import the modal component

function Subscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Email is required');
      setSuccess('');
      setIsModalOpen(true); // Open modal for error
    } else if (!emailPattern.test(email)) {
      setError('Please enter a valid email');
      setSuccess('');
      setIsModalOpen(true); // Open modal for error
    } else {
      setError('');
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        console.log(response); // Log the whole response
        console.log(response.status); // Log the status code
  
        // Check if the response has content
        const contentType = response.headers.get('content-type');
        let result = null;
  
        if (contentType && contentType.includes('application/json')) {
          result = await response.json(); // Parse JSON if response is JSON
          console.log(result); // Log the result from the API
        }
  
        if (!response.ok) {
          throw new Error(result?.message || 'Failed to subscribe');
        }
  
        setSuccess('Subscription successful!');
        setEmail('');
        setIsModalOpen(true); // Open modal for success
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to subscribe. Please try again later.');
        setIsModalOpen(true); // Open modal for error
      }
    }
  };
  
  
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setError(''); // Clear any error
    setSuccess(''); // Clear any success
  };

  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <div className="subscribe-left">
          <div className="subscribe-image">
            <img src={notificationIcon} alt="Notification Icon" />
          </div>
          <h2 className="subscribe-title">Subscribe to our newsletter</h2>
          <h3 className="subscribe-description">
            Subscribe to our newsletter to stay informed about the latest updates
          </h3>
        </div>

        <div className="subscribe-right">
          <div className="envelope-icon-container">
            <img className="envelope-icon" src={mailIcon} alt="Envelope Icon" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              value={email}
              onChange={handleChange}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Render Modal when there is an error or success */}
          {isModalOpen && (
      <Modal
        message={error || success} // Show error message or success message
        onClose={closeModal} // Close modal on button click
        type={success ? 'success' : 'error'} // Pass 'success' or 'error' based on which message is active
      />
    )}
    </div>
  );
}

export default Subscribe;
