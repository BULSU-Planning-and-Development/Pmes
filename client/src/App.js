// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import HomePage from './pages/HomePage'; // Import the HomePage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin and User Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
