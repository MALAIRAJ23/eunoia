import React from 'react';
import './login.css'; 
import { Link, useNavigate } from 'react-router-dom'; 

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Here, you can implement authentication logic (optional)
    // If authentication is successful:
    navigate('/homepage'); // Redirect to the new homepage after login
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        
        {/* Extra options container for Forgot Password and Sign Up */}
        <div className="login-extra-options">
          <div className="extra-options-container">
            <Link to="/forgotpassword" className="forgot-password-link">Forgot Password?</Link>
            <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
