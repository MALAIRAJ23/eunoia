import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For redirecting to the login page

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mocking the signup logic (usually here you'd send the data to the server)
    if (username && email && password) {
      console.log('User signed up:', { username, email, password });
      
      // Redirect to the login page after signup
      navigate('/login');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit">Sign Up</button>
        </form>
        
        <div className="signup-extra-options">
          <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;