// server/routes/auth.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// @route   POST /auth/register
// @desc    Register a new user
router.post('/register', register);

// @route   POST /auth/login
// @desc    Login a user
router.post('/login', login);

module.exports = router;
