// src/pages/Admin/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { getAllUsers, updateUserRole } from '../../api/userService';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Failed to load users');
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await updateUserRole(userId, newRole);
      setUsers(users.map(user => (user._id === userId ? { ...user, role: newRole } : user)));
    } catch (err) {
      setError(err.message || 'Failed to update user role');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>This is the admin dashboard.</p>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} ({user.role}){' '}
            <button onClick={() => handleRoleChange(user._id, 'admin')}>Make Admin</button>
            <button onClick={() => handleRoleChange(user._id, 'user')}>Make User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
