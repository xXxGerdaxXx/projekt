import React from 'react';
import '../styles.css';

// Import images from src folder
import mapImage from '../assets/images/maps.svg';
import locationIcon from '../assets/images/bx-map.svg';
import phoneIcon from '../assets/images/bx-phone-call.svg';
import clockIcon from '../assets/images/bx-time-five.svg';
import facebookIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import instagramIcon from '../assets/images/instagram.svg';
import youtubeIcon from '../assets/images/youtube.svg';

function MapAndCenters() {
  return (
    <section className="map-section-index2">
      <div className="container-index2">
        <div className="map-index2">
          <img src={mapImage} alt="Map" />
        </div>
        <div className="medical-centers-index2">
          <div className="medical-center-index2">
            <h3>Medical Center 1</h3>
            <p>
              <img src={locationIcon} alt="Location icon" />
              4567 Washington Ave, Manchester, Kentucky 39405
            </p>
            <p>
              <img src={phoneIcon} alt="Phone icon" />
              (406) 555-0120
            </p>
            <p>
              <img src={clockIcon} alt="Clock icon" />
              Mon – Fri: 9:00 am – 22:00 pm <br />
              Sat – Sun: 9:00 am – 20:00 pm
            </p>
          </div>

          <div className="medical-center-index2">
            <h3>Medical Center 2</h3>
            <p>
              <img src={locationIcon} alt="Location icon" />
              2164 Royal Ln Mesa, New Jersey 45463
            </p>
            <p>
              <img src={phoneIcon} alt="Phone icon" />
              (646) 555-0133
            </p>
            <p>
              <img src={clockIcon} alt="Clock icon" />
              Mon - Fri: 9:00 am - 22:00 pm <br />
              Sat - Sun: 9:00 am - 20:00 pm
            </p>

            <div className="social-icons-index2">
              <img src={facebookIcon} alt="Facebook" />
              <img src={twitterIcon} alt="Twitter" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={youtubeIcon} alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapAndCenters;
