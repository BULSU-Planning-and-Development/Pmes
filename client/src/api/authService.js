// src/api/authService.js
import axios from '../utils/axiosConfig';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('/auth/login', { username, password });
    return response.data; // Returns the token and user information
  } catch (error) {
    throw error; // Handle the error in the calling component
  }
};

export const registerUser = async (username, password, role = 'user') => {
  try {
    const response = await axios.post('/auth/register', { username, password, role });
    return response.data; // Returns the token and user information if needed
  } catch (error) {
    throw error; // Handle the error in the calling component
  }
};
