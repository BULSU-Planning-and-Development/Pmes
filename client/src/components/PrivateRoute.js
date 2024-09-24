// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuthStore();

  // Check if user exists and role matches
  if (!user || (roles && !roles.includes(user.role))) {
    return <Navigate to="/login" />;
  }

  // If authenticated and role matches, render the children (protected component)
  return children;
};

export default PrivateRoute;