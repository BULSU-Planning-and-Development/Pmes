// src/auth/Register.js
import React, { useState } from 'react';
import useAuthStore from '../store/authStore';

const Register = () => {
  const { register, loading, error } = useAuthStore();
  const [formData, setFormData] = useState({ username: '', password: '', role: 'user' });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await register(formData.username, formData.password, formData.role);
  };

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
      <select
        name="role"
        value={formData.role}
        onChange={onChange}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" disabled={loading}>
        Register
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;
