const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoroutes = require('./routes/todoroutes'); // Match file name

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://172.17.0.2:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api', todoroutes);

// Start the server
app.listen(PORT, () => console.log(`Backend running at http://10.0.0.13:${PORT}`));
