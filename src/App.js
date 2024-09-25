import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import ForgotPassword from './forgotpassword';
import ResetPassword from './resetpassword';
import HomePageAfterLogin from './homepage';
import logo1 from './icon.jpg';
import logo2 from './title.jpg';
import loginImage from './getstarted.jpg';
import './App.css';

function MainApp() {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/forgotpassword" && location.pathname !== "/resetpassword";

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
        {/* Initial Home Route */}
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

        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />

        {/* Forgot Password Route */}
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Reset Password Route */}
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* New HomePageAfterLogin Route */}
        <Route path="/homepage" element={<HomePageAfterLogin />} />

        {/* Additional Routes */}
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/engage" element={<div>Engage Page</div>} />
        <Route path="/elements" element={<div>Elements Page</div>} />
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
