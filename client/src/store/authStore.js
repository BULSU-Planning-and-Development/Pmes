// src/store/authStore.js
import { create } from 'zustand';
import axios from '../utils/axiosConfig';

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post('/auth/login', { username, password });
      
      // Debugging to ensure response contains user and token
      console.log("Login response:", res.data);

      localStorage.setItem('token', res.data.token);
      set({ token: res.data.token, user: res.data.user, loading: false });

      // Debugging to ensure user is set in Zustand store
      console.log("User set in store:", res.data.user);

    } catch (err) {
      set({ error: err.response?.data?.msg || 'Login failed', loading: false });
      console.log("Login error:", err.response?.data);
    }
  },

  register: async (username, password, role) => {
    set({ loading: true, error: null });
    try {
      await axios.post('/auth/register', { username, password, role });
      set({ loading: false });
    } catch (err) {
      set({ error: err.response?.data?.msg || 'Registration failed', loading: false });
      console.log("Register error:", err.response?.data);
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },

  fetchUser: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ loading: true });
      try {
        const res = await axios.get('/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        set({ user: res.data, loading: false });
      } catch (err) {
        set({ error: err.response?.data?.msg || 'Failed to fetch user', loading: false });
      }
    }
  },
}));

export default useAuthStore;
