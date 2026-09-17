const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  host: 'db',
  user: 'demo',
  password: 'demopass',
  database: 'demodb',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hello from Docker! DB time: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('DB connection error: ' + err.message);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
