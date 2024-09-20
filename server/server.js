// server/server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Import the cors middleware
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
