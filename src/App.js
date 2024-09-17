import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo1 from "./title.jpg";
import logo2 from "./icon.jpg";
import loginImage from "./getstarted.jpg"; 
import Login from './login'; // Import the Login component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="MainPage">
        <nav className="Main">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Engage">Engage</a>
          <a href="#Elements">Elements</a>
          <a href="#More">More</a>
        </nav>

        <div className="Home">
          <p>This is a page to redeem/energise your mind and soul</p>
        </div>
        
        <div className="Img">
          <img src={logo1} className="App-logo1" alt="logo" />
          <img src={logo2} className="App-logo2" alt="logo" />
        </div>
        
        <div className="About">
          <p>Discover Personalized mental health insights and track your well being effortlessly</p>
        </div>

        {/* Button as an image */}
        <div className="ButtonContainer">
          <Link to="/login">
            <img src={loginImage} alt="Get Started" className="ActionButton" />
          </Link>
        </div>

        <div className="ftrdiv">
          <footer className="ftr">
            <p className="ftrp">@EUNOIA - Inner Harmony</p>
          </footer>
        </div>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
