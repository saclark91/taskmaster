// app.js


// Import environment variables
require('dotenv').config();

// Import Express
const express = require('express');

// Initiate Express object
const app = express();

// Import mssql
const sql = require('mssql');

// Import dbConfig.js file to establish connection
const dbConfig = require('./dbConfig');

// One of the CRUD operations: READ
app.get('/tasks', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Tasks');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error retrieving tasks:', err);
        res.status(500).send('Error retrieving tasks from database');
    }
});



// A basic function that tries to connect to the database configured in dbconfig
// with appropriate console statements
async function connectToDatabase() {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to SQL Server database');
    } catch (err) {
        console.error('Error connecting to SQL Server database:', err);
    }
}

connectToDatabase();

// Typically done at the end of the app.js or server.js file to start the server
const PORT = process.env.PORT || 3000; // Use the port defined in environment variable or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});