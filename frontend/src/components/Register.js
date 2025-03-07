import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate(); // Initialize navigation

  const handleRegister = (e) => {
    e.preventDefault();

    if (username && password && email) {
      setError(false);
      console.log('Registered successfully:', { username, password, email });
      alert('Registration successful');
      // Navigate to login page after successful registration
      navigate('/login');
    } else {
      setError(true);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <h1>Register Page</h1>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error">All fields are required!</p>}

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{' '}
        <button onClick={() => navigate('/login')}>Login here</button>
      </p>
    </div>
  );
};

export default Register;
