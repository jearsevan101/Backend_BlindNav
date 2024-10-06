require('dotenv').config(); // To load environment variables from .env file
const { Pool } = require('pg');

// Create a new pool instance for database connection
const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || 5432,
  ssl: {
    rejectUnauthorized: false, // Important when connecting to Neon database with SSL
  },
});

// Function to query the database
const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = {
  query,
};
