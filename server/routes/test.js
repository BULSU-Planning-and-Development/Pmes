// routes/test.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users (for testing purposes)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from MongoDB
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
