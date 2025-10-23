const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // loads .env file content into process.env

const app = express();
const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // <-- This was your OLD line. I have replaced it below.


// --- START: NEW CORS CONFIGURATION ---
// This new block allows your local AND your Vercel site to make requests
const whitelist = [
  'http://localhost:5173',                 // Your local frontend
  'https://property-project01.vercel.app'  // Your deployed Vercel frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    // '|| !origin' allows requests from tools like Postman
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions)); // Use the new options
// --- END: NEW CORS CONFIGURATION ---


app.use(express.json()); // Enable parsing of JSON in request body

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error(err));

// API Routes
// (This line is from your screenshot)
app.use('/api/properties', require('./routes/property.routes.js'));


// Start the server
// (This was missing from your screenshot but required to run the server)
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
