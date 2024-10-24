import React, { useState } from 'react';
import vector from '../assets/images/Vector.svg';
import vectorgreen from '../assets/images/Vectorgreen.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCommentAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // Toggle the question state
  };

  return (
    <div className="faq">
      <div className="faq-content">
        <div className="faq-text">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>

        <div className="contact-boxes">
          <div className="contact-box">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <p>Still have questions?</p>
            <a href="index2.html">
              Contact us <img src={vector} alt="Arrow" />
            </a>
          </div>

          <div className="contact-box2">
            <div className="contact-icon2">
              <FontAwesomeIcon icon={faCommentAlt} />
            </div>
            <p>Don't like phone calls?</p>
            <a href="index2.html">
              Contact us <img src={vectorgreen} alt="Arrow" />
            </a>
          </div>
        </div>
      </div>

      <div className="questions-list">
        {[
          {
            question: "Is any of my personal information stored in the App?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            question: "What formats can I download my transaction history in?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Can I schedule future transfers?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
          {
            question: "When can I use Banking App services?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            question: "Can I create my own password that is easy for me to remember?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          },
          {
            question: "What happens if I forget or lose my password?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
          },
        ].map((item, index) => (
          <div className={`questions-item ${openQuestion === index ? 'active' : ''}`} key={index}>
            <div className="question-header">
              <h3>{item.question}</h3>
              <button
                className="more-button"
                onClick={() => toggleAnswer(index)}
                aria-expanded={openQuestion === index ? 'true' : 'false'}
              >
                <FontAwesomeIcon
                  icon={openQuestion === index ? faChevronUp : faChevronDown} // Toggle Chevron based on open state
                />
              </button>
            </div>
            <div className={`questions-item-content ${openQuestion === index ? 'show-answer' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
