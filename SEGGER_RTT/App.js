const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes'); // Assuming you will store routes in this file

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Database connection
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.use('/api', movieRoutes); // Prefix all routes defined in movieRoutes with /api

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
