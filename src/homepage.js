import React from 'react';
import './homepage.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Engage</li>
          <li>Elements</li>
          <li>More</li>
        </ul>
      </nav>
      <div className="content">
        <div className="vertical-text">
          <span>EU</span>
          <span>NO</span>
          <span>IA</span>
        </div>
        <div className="text-section">
          <h1>EUNOIA</h1>
          <p>
            At Eunoia, we believe that mental health is as essential as physical health. Our mission
            is to provide everyone with a minimal, sustainable way to keep track of their mental 
            well-being. With personalized features and an intuitive interface, our platform helps 
            you monitor, reflect, and grow at your own pace. Whether you're looking for daily mental 
            health check-ins or long-term tracking, Eunoia is designed to support you every step of 
            the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
