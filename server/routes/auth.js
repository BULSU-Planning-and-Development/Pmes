// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register Route
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body; // Accept role from the frontend

  try {
    let user = await User.findOne({ username });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ username, password, role: role || 'user' }); // Default role to 'user'

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Return JWT and user information
    const payload = { userId: user.id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ 
          token, 
          user: { id: user._id, username: user.username, role: user.role } 
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Return JWT and user info (including role)
    const payload = { userId: user.id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ 
          token, 
          user: { id: user._id, username: user.username, role: user.role } // Include role in the response
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Protected Route Example (for authenticated user details)
router.get('/me', async (req, res) => {
  // This route should use middleware to authenticate token and return user data
});

module.exports = router;
