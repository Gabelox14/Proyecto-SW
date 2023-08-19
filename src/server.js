const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();

app.use(bodyParser.json());

// Azure SQL Database configuration
const config = {
  user: 'adminserviciossql',
  password: '123Queso',
  server: 'serverserviciossql.database.windows.net',
  database: 'dbservicios',
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: false // Change to true for local development
  }
};

// API endpoint for adding a new dish
app.post('/api/dishes', async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send('Dish name is required');
    }

    const pool = await sql.connect(config);
    await pool.request()
      .input('name', sql.VarChar, name)
      .query('INSERT INTO Dish (name) VALUES (@name)');

    res.status(201).json({ message: 'Dish added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
