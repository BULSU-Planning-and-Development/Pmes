import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import HomePage from './pages/User/HomePage';
import DashboardPage from './pages/User/DashboardPage'; // For users
import Register from './auth/Register';
import PrivateRoute from './components/Common/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        
        <Route path="/register" element={<Register />} />
        {/* Private user route */}
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        
        {/* Private admin route */}
        {/* <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboardPage /></PrivateRoute>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
