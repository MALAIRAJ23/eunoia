import React from 'react';
import './login.css'; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src="/loginlogo.png" alt="App Logo" className="login-logo" />
      </div>
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
      </div>
    </div>
  );
}

export default Login;
