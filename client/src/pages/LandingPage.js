// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing_page.css'


const HomePage = () => {
  return (
    <section id="landing_page">
      <h1>Welcome to My App </h1>
      <p>This is the landing page of the application.</p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register" style={{ marginLeft: '10px' }}>Register</Link>
      </div>
    </section>
  );
};

export default HomePage;
