const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware to parse incoming request bodies
app.use(cors());
app.use(bodyParser.json());

// API endpoint to receive sign-up data and save to JSON
app.post('/api/signup', (req, res) => {
    const data = req.body;

    // Path to the JSON file where the data will be saved
    const filePath = path.join(__dirname, 'signup-data.json');

    // Read the existing data from the file
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ message: 'Error reading file' });
        }

        const existingData = fileData ? JSON.parse(fileData) : [];

        // Append the new sign-up data
        existingData.push(data);

        // Save the updated data back to the JSON file
        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ message: 'Error saving data' });
            }
            res.status(200).json({ message: 'Sign-up data saved successfully!' });
        });
    });
});


// API endpoint to handle login and check if user data exists in JSON
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;  // Get email and password from request body
    const filePath = path.join(__dirname, 'signup-data.json');

    // Read the signup data from the JSON file
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading user data' });
        }

        const users = JSON.parse(fileData || '[]'); // Parse the existing signup data
        const user = users.find(u => u.email === email); // Find the user by email

        if (!user) {
            // If user not found, respond with error
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            // If password doesn't match, respond with error
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If everything is okay, respond with success
        res.status(200).json({ message: 'Login successful!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
