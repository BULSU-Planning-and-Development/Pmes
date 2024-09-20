// src/auth/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Register = () => {
  const { register, error, loading } = useAuthStore();
  const [formData, setFormData] = useState({ username: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData.username, formData.password, formData.role);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        Register
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;
