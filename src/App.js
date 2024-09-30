import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import ForgotPassword from "./forgotpassword";
import ResetPassword from "./resetpassword";
import About from "./about";
<<<<<<< HEAD
import Engage from "./engage"; // Import Engage component
import ElementsPage from "./elements"; // Import ElementsPage component
=======
import ElementsPage from "./elements"; // Import ElementsPage
import Elements1Page from "./elements1"; // Import Elements1Page (New Page)
import EngagePage from "./engage"; // Assuming there's an EngagePage component
>>>>>>> 6a897d5da57ef24109fa68f35546d4e7a3f6fa1a
import logo1 from "./icon.jpg";
import logo2 from "./title.jpg";
import loginImage from "./getstarted.jpg";
import "./App.css";

function MainApp() {
  const location = useLocation();

  // Conditionally hide header and footer on specific routes
  const showHeaderAndFooter = ![
    "/login",
    "/signup",
    "/forgotpassword",
    "/resetpassword",
  ].includes(location.pathname);

  return (
    <div className="MainPage">
      {/* Conditionally render Navigation */}
      {showHeaderAndFooter && (
        <nav className="Main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/engage">Engage</Link>
          <Link to="/elements">Elements</Link>
          <Link to="/more">More</Link>
        </nav>
      )}

      {/* Routing to different pages */}
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
        {/* Other Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/engage" element={<Engage />} /> {/* Engage Component */}
        <Route path="/elements" element={<ElementsPage />} />{" "}
        {/* ElementsPage */}
=======

        {/* Engage Route */}
        <Route path="/engage" element={<EngagePage />} />

        {/* Elements Route */}
        <Route path="/elements" element={<ElementsPage />} />

        {/* Elements1 Route (New Page) */}
        <Route path="/elements1" element={<Elements1Page />} />

        {/* More Route */}
        <Route path="/more" element={<div>More Page</div>} />
>>>>>>> 6a897d5da57ef24109fa68f35546d4e7a3f6fa1a
      </Routes>

      {/* Conditionally render Footer */}
      {showHeaderAndFooter && (
        <footer className="ftr">
          <p className="ftrp">@EUNOIA - Inner Harmony</p>
        </footer>
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
