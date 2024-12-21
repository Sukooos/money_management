// server.js
const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/config/database');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
const authRoutes = require('./src/routes/authRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;

// Start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database', err);
  });
