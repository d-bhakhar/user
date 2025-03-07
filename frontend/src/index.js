import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1>User Management System</h1>
    <Login />
  </React.StrictMode>
);

reportWebVitals();
