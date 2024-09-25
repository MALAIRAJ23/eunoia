import React, { useState } from 'react';
import './forgotpassword.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mocking an API call to send reset link
    if (email) {
      console.log(`Reset link sent to: ${email}`);
      setMessage('A password reset link has been sent to your email.');

      // Simulate sending an email and redirecting to login page
      setTimeout(() => {
        navigate('/login');  // Redirect to login page after a few seconds
      }, 3000);
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
