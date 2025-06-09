import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sena',
    database: 'saice',
    port: '3307',
    waitForConnections: true,
    connectionLimit: 10,
});