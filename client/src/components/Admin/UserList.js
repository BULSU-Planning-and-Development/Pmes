import React from 'react';

const UserList = ({ users, onRoleUpdate }) => {
  const handleRoleChange = (e, userId) => {
    const newRole = e.target.value;
    onRoleUpdate(userId, newRole);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Current Role</th>
          <th>Change Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>
              <select
                value={user.role}
                onChange={(e) => handleRoleChange(e, user._id)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
