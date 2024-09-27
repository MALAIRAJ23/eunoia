import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import ForgotPassword from "./forgotpassword";
import ResetPassword from "./resetpassword";
import About from "./about";
import logo1 from "./icon.jpg";
import logo2 from "./title.jpg";
import loginImage from "./getstarted.jpg";
import "./App.css";
import ElementsPage from "./elements"; // Import ElementsPage

function MainApp() {
  const location = useLocation();
  const showHeaderAndFooter =
    location.pathname !== "/login" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/forgotpassword" &&
    location.pathname !== "/about" &&
    location.pathname !== "/engage" &&
    location.pathname !== "/more" &&
    location.pathname !== "/resetpassword";

  return (
    <div className="MainPage">
      {/* Conditionally show navigation and footer */}
      {showHeaderAndFooter && (
        <>
          <nav className="Main">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/engage">Engage</Link>
            <Link to="/elements">Elements</Link> {/* Link to Elements */}
            <Link to="/more">More</Link>
          </nav>
        </>
      )}

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div className="Home">
              <p>This is a page to redeem/energize your mind and soul</p>

              <div className="Img">
                <img src={logo1} className="App-logo1" alt="Main logo" />
                <img src={logo2} className="App-logo2" alt="Secondary logo" />
              </div>

              <div className="About">
                <p>
                  Discover personalized mental health insights and track your
                  well-being effortlessly
                </p>
              </div>

              <div className="ButtonContainer">
                <Link to="/login">
                  <img
                    src={loginImage}
                    alt="Get Started"
                    className="ActionButton"
                  />
                </Link>
              </div>
            </div>
          }
        />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />

        {/* Forgot Password Route */}
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Reset Password Route */}
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />

        {/* Engage Route */}
        <Route path="/engage" element={<div>Engage Page</div>} />

        {/* Elements Route */}
        <Route path="/elements" element={<ElementsPage />} />

        {/* More Route */}
        <Route path="/more" element={<div>More Page</div>} />
      </Routes>

      {/* Conditionally show footer */}
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
