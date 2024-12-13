require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import the database connection

// Initialize the express application
const app = express();

// Connect to the database
connectDB();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to My App!');
});

// API Routes
app.use('/api/users', require('./routes/userRoutes')); // User routes are loaded here

// Catch-all route for undefined routes (404 error handler)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global error handler for any other errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ error: 'Internal Server Error' }); // Send a generic error message
});

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
