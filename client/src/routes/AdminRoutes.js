// src/routes/AdminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import PrivateRoute from '../components/PrivateRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      {/* Add other admin routes here */}
    </Routes>
  );
};

export default AdminRoutes;
