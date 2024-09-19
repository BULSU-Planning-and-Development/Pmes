// src/utils/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this to your backend URL
});

export default instance;
