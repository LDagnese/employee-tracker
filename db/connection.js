const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_UID,
    password: process.env.DB_PASS,
    database: 'employees'   
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;