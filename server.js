const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const drugsRoutes = require('./drug-routes');
const contactRoutes = require('./contact-routes'); // Import contact routes
require('dotenv').config();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (e.g., images)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Drug Routes
app.use('/api/drug-routes', drugsRoutes);

// Contact Routes
app.use('/api', contactRoutes); // Add contact routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
