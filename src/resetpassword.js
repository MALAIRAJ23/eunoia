import React, { useState, useEffect } from 'react';
import './resetpassword.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // To get the query parameters from URL

  // Get the reset code (mocked) from the URL
  const resetCode = searchParams.get('resetCode');

  useEffect(() => {
    if (!resetCode) {
      setError('Invalid or missing password reset code.');
    }
  }, [resetCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
      return;
    }

    try {
      // Simulate password reset logic (this can be connected to a backend API if needed)
      console.log('Password reset code:', resetCode);
      console.log('New password set to:', password);
      
      setMessage('Your password has been successfully reset. Redirecting to login...');
      
      // Redirect to login after a delay
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h2>Reset Password</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input 
              type="password" 
              id="confirmPassword" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default ResetPassword;
