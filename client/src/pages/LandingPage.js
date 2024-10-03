// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/LandingPage/Header';
import '../styles/landing_page.css'
import { PlanningAndDevelopmentOffice } from '../assets/images';


const HomePage = () => {
  return (
    <section id="landing_page">

<div id="intro">
        <img src={PlanningAndDevelopmentOffice} alt="Logo" />
        <div className="rectangle"></div>
      </div>
      <div className="container"> <Header /> </div>
     
      {/* <div>
        <Link to="/login">Login</Link>
        <Link to="/register" style={{ marginLeft: '10px' }}>Register</Link>
      </div> */}
    </section>
  );
};

export default HomePage;
