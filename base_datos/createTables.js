/* require('dotenv').config(); // Asegúrate de cargar las variables de entorno al inicio

const pool = require('./db'); // Asegúrate de que la ruta a tu archivo db.js sea correcta

const createUsersTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
    console.log('Users table created');
  } catch (err) {
    console.error('Error creating users table', err);
  }
};

createUsersTable(); */