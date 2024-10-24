import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
  // State to track dark mode (default is false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, check localStorage if dark mode is enabled
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'enabled') {
      document.body.classList.add('dark-mode'); // Apply dark mode class to body
      setIsDarkMode(true); // Set the state to true
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      // If dark mode is enabled, turn it off
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
      setIsDarkMode(false); // Update state
    } else {
      // Enable dark mode
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
      setIsDarkMode(true); // Update state
    }
  };

  return (
    <header>
      <div className="container">
        <a id="logo" href="/">
          <img src={logo} alt="Silicon Logotype" />
          <span className="logo-title">Silicon</span> {/* Title next to logo */}
        </a>

        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="/contact">Contact</a> {/* Add Contact */}
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={isDarkMode} // Controlled input
              onChange={toggleDarkMode} // Event handler for toggling dark mode
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>
      </div>
    </header>
  );
};

export default Header;