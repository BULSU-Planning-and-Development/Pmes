// server/controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

// Register a new user
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ username, password, role });

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = generateToken({ userId: user.id });
    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Log in a user
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const token = generateToken({ userId: user.id });
    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
