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


// API endpoint to receive login data and save to JSON
app.post('/api/login', (req, res) => {
    const data = req.body;

    const filePath = path.join(__dirname, 'login-data.json');

    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ message: 'Error reading file' });
        }

        const existingData = fileData ? JSON.parse(fileData) : [];

        existingData.push(data);

        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ message: 'Error saving data' });
            }
            res.status(200).json({ message: 'Login data saved successfully!' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
