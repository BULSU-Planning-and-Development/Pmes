// server/routes/auth.js
const express = require('express');
const {
  register,
  login,
  getAllUsers,
  updateUserRole,
} = require('../controllers/authController');
const router = express.Router();

// @route   POST /auth/register
// @desc    Register a new user
router.post('/register', register);

// @route   POST /auth/login
// @desc    Login a user
router.post('/login', login);

// @route   GET /auth/users
// @desc    Fetch all users (admin only)
router.get('/users', getAllUsers);

// @route   PUT /auth/users/role
// @desc    Update a user's role (admin only)
router.put('/users/role', updateUserRole);

module.exports = router;
