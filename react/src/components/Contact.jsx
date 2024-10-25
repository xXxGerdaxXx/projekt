import React from 'react';
import '../styles.css';

// Import images from src folder
import emailIcon from '../assets/images/email.svg';
import careerIcon from '../assets/images/career.svg';
import arrowIcon from '../assets/images/Vector.svg';

function Contact() {
  return (
    <section className="full-width-wrapper-index2">
      <div className="contact-us-index2">
        <div className="contact-details-index2">
          <h1>Contact us</h1>
          
          {/* Contact Item 1: Email Us */}
          <div className="contact-item-index2">
            <div className="contact-icon-index2">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="contact-text-index2">
              <h3>Email us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a href="#">Leave a message <img src={arrowIcon} alt="Arrow" /></a>
            </div>
          </div>
          
          {/* Contact Item 2: Careers */}
          <div className="contact-item-index2">
            <div className="contact-icon-index2">
              <img src={careerIcon} alt="Careers Icon" />
            </div>
            <div className="contact-text-index2">
              <h3>Careers</h3>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
              <a href="#">Send an application <img src={arrowIcon} alt="Arrow" /></a>
            </div>
          </div>
        </div>

        <div className="consultation-form-index2">
          <h2>Get Online Consultation</h2>
          <form action="#">
            <label htmlFor="fullname-index2">Full name</label>
            <input type="text" id="fullname-index2" name="fullname" placeholder="Your full name" />

            <label htmlFor="email-index2">Email address</label>
            <input type="email" id="email-index2" name="email" placeholder="Your email address" />

            <label htmlFor="specialist-index2">Specialist</label>
            <select id="specialist-index2" name="specialist">
              <option value="doctor1">Doctor: William Hartnell</option>
              <option value="doctor2">Doctor: Patrick Troughton</option>
              <option value="doctor2">Doctor: Jon Pertwee</option>
              <option value="doctor2">Doctor: Tom Baker</option>
              <option value="doctor2">Doctor: Peter Davison</option>
              <option value="doctor2">Doctor: Colin Baker</option>
              <option value="doctor2">Doctor: Sylvester McCoy</option>
              <option value="doctor2">Doctor: Paul McGann</option>
            </select>

            <button type="submit" className="btn-primary-index2">Make an appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
