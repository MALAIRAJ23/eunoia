import React from 'react';
import './login.css'; 
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
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
        
        <div className="login-extra-options">
          <Link to="/forgotpassword" className="forgot-password-link">Forgot Password?</Link>
          <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up now</Link></p> {/* Updated Link */}
        </div>
      </div>
    </div>
  );
}

export default Login;