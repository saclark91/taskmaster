// dbConfig.js

module.exports = {
    server: 'DESKTOP-RRTU67G\\PLAYGROUND', // SQL Server instance name
    database: 'TaskMaster', // Database name
    authentication: {
        type: 'default', // Use 'default' for SQL Server Authentication (SqlAuth)
        options: {
            userName: process.env.DB_USERNAME, // SQL Server login username from environment variable
            password: process.env.DB_PASSWORD // SQL Server login password from environment variable
        }
    },
    options: {
        trustServerCertificate: true // For development purposes only
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};
