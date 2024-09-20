// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the landing page of the application.</p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register" style={{ marginLeft: '10px' }}>Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
