import React from 'react';
import '../styles.css';

// Import images from the src folder
import homeIcon from '../assets/images/bx-home-alt.svg';
import breadIcon from '../assets/images/bread.svg';

function Breadcrumb() {
  return (
    <div className="breadcrumb-wrapper-index2">
      <div className="container-index2">
        <nav className="breadcrumb-index2">
          {/* Use imported images */}
          <img src={homeIcon} alt="Homepage icon" />
          <a href="/">Homepage</a>
          <img src={breadIcon} alt="breadcrumb separator" />
          <a href="#" className="current-index2">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
