import React, { useState } from 'react';
import './newhomepage.css'; // Import the CSS file for the homepage
import logo from './icon.jpg'; // Assuming you have a logo image in your assets

function NewHomepage() {
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown toggle state

  // Toggle dropdown for profile options
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="homepage-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-left">
          {/* Other navigation items can be added here */}
        </div>

        <div className="nav-right">
          {/* Logo and Dropdown on the right corner */}
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" onClick={toggleDropdown} />
            {showDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li>My Profile</li>
                  <li>Settings</li>
                  <li>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Page Content without image containers */}
      <div className="homepage-content no-text">
        {/* Content here will be blank as requested */}
      </div>

      <footer className="homepage-footer">
        {/* Footer without any text */}
      </footer>
    </div>
  );
}

export default NewHomepage;
