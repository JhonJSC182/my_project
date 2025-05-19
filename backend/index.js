// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const testRoutes = require('./routes/testRoutes');

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong from Express backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.use('/api/test', testRoutes);