import React from 'react'; 
import logo1 from "./icon.jpg";
import logo2 from "./title.jpg";
import loginImage from "./getstarted.jpg"; 
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Login from './login.js';
import "./App.css";

function MainApp() {
  const location = useLocation(); // Hook to get the current route
  const showHeaderAndFooter = location.pathname !== "/login"; // Conditionally show nav and footer

  return (
    <div className="MainPage">
      {showHeaderAndFooter && (
        <>
          <nav className="Main">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/engage">Engage</Link>
            <Link to="/elements">Elements</Link>
            <Link to="/more">More</Link>
          </nav>
        </>
      )}

      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <div className="Home">
            <p>This is a page to redeem/energize your mind and soul</p>

            <div className="Img">
              <img src={logo1} className="App-logo1" alt="Main logo" />
              <img src={logo2} className="App-logo2" alt="Secondary logo" />
            </div>

            <div className="About">
              <p>Discover personalized mental health insights and track your well-being effortlessly</p>
            </div>

            <div className="ButtonContainer">
              <Link to="/login">
                <img src={loginImage} alt="Get Started" className="ActionButton" />
              </Link>
            </div>
          </div>
        }/>

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* About Route */}
        <Route path="/about" element={<div>About Page</div>} />

        {/* Engage Route */}
        <Route path="/engage" element={<div>Engage Page</div>} />

        {/* Elements Route */}
        <Route path="/elements" element={<div>Elements Page</div>} />

        {/* More Route */}
        <Route path="/more" element={<div>More Page</div>} />
      </Routes>

      {showHeaderAndFooter && (
        <div className="ftrdiv">
          <footer className="ftr">
            <p className="ftrp">@EUNOIA - Inner Harmony</p>
          </footer>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
