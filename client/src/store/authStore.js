// src/store/authStore.js
import { create } from 'zustand';
import { loginUser, registerUser } from '../api/authService'; // Updated path

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const { token, user } = await loginUser(username, password);
      localStorage.setItem('token', token);
      set({ token, user, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.msg || 'Login failed', loading: false });
    }
  },

  register: async (username, password, role) => {
    set({ loading: true, error: null });
    try {
      await registerUser(username, password, role);
      set({ loading: false });
    } catch (error) {
      set({ error: error.response?.data?.msg || 'Registration failed', loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));

export default useAuthStore;
