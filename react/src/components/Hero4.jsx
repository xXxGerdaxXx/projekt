import React from 'react';
import quotesIcon from '../assets/images/quotes.svg'; // Adjust the path based on your project structure
import starIcon from '../assets/images/star.svg'; // Adjust the path
import emptyStarIcon from '../assets/images/empty-star.svg'; // Adjust the path
import avatar1 from '../assets/images/avatar1.svg'; // Adjust the path
import avatar2 from '../assets/images/avatar2.svg'; // Adjust the path

const TestimonialsSection = () => {
  return (
    <section className="hero4">
      <div className="testimonials">
        <h1>Clients are Loving Our App</h1>
        <div className="testimonial-cards">
          {/* First Testimonial */}
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={quotesIcon} alt="Quote Icon" className="quote-icon" />
              <div className="stars">
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={emptyStarIcon} alt="Four out of five star rating." />
              </div>
            </div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas
              lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
            </p>
            <div className="testimonial-footer">
              <img src={avatar1} alt="Fannie Summers" className="avatar" />
              <div>
                <h4>Fannie Summers</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={quotesIcon} alt="Quote Icon" className="quote-icon" />
              <div className="stars">
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
                <img src={starIcon} alt="Star" />
              </div>
            </div>
            <p>
              Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla
              tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
            </p>
            <div className="testimonial-footer">
              <img src={avatar2} alt="Albert Flores" className="avatar" />
              <div>
                <h4>Albert Flores</h4>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
