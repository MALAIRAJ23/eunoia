import React, { useState } from 'react';
import './newhomepage.css'; // Import the CSS file for the homepage
import logo from './icon.jpg'; // Assuming you have a logo image in your assets

function NewHomepage() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown for profile options
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="homepage-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
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
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/elements">Elements</a></li>
          <li><a href="/engage">Engage</a></li>
          <li><a href="/more">More</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="homepage-content">
        <header className="homepage-header">
          <h1>Welcome to Your New Homepage!</h1>
          <p>This is the place to explore all the features of our platform.</p>
        </header>

        <section className="features-section">
          <h2>Explore Features</h2>
          <p>Discover everything we have to offer, from personalized insights to tracking your progress.</p>
          <button className="explore-button">Explore Now</button>
        </section>

        <section className="updates-section">
          <h2>Latest Updates</h2>
          <p>Stay updated with our latest features and improvements.</p>
          <ul>
            <li>New Dashboard Design</li>
            <li>Improved Performance Metrics</li>
            <li>More Personalization Options</li>
          </ul>
        </section>

        <section className="profile-section">
          <h2>Your Profile</h2>
          <p>Manage your account, view your statistics, and more.</p>
          <button className="profile-button">Go to Profile</button>
        </section>
      </div>

      <footer className="homepage-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default NewHomepage;
