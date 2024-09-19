import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Login = () => {
  const { login, loading, error, user } = useAuthStore();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(formData.username, formData.password);
  };

  useEffect(() => {
    if (user) {
      console.log("User object in useEffect:", user);  // Log the whole user object
      console.log("User role in useEffect:", user.role); // Log user.role specifically
      
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'user') {
        navigate('/dashboard');
      } else {
        console.log("Role is not defined or unexpected value");
      }
    }
  }, [user, navigate]);
  

  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={onChange}
        placeholder="Username"
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        Login
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;
