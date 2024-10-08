import React, { useState } from 'react';
import './forgotpassword.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate sending a password reset email
    if (email) {
      console.log('Simulated: Reset link sent to:', email); // For debugging purposes
      setMessage('A password reset link has been sent to your email.');

      // Redirect to login page after a few seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      setError('Please enter a valid email address.');
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
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
