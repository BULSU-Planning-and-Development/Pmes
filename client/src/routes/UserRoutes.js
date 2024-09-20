// src/routes/UserRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDashboard from '../pages/User/UserDashboard';
import PrivateRoute from '../components/PrivateRoute';

const UserRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />
      {/* Add other user routes here */}
    </Routes>
  );
};

export default UserRoutes;
