import React, { useState } from 'react';
import './Login.css'; // Add your custom styles here

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === ' ' || password === ' ') {
      console.log('Add required fields');  
    } else {
      console.log('Login successful:', { username });
    }
   
  
    if (username && password) {
      setError(false);
      alert('Login successful');
      // Redirect to another page or perform additional actions here
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error">Both fields are required</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
