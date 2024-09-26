// src/api/userService.js
import axiosInstance from '../utils/axiosConfig';

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/auth/users');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Failed to fetch users');
  }
};

export const updateUserRole = async (userId, role) => {
  try {
    const response = await axiosInstance.put('/auth/users/role', { userId, role });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Failed to update user role');
  }
};
