const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads .env file content into process.env

const app = express();
const PORT = process.env.PORT || 5000;
     
// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON in request body

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error(err));

// API Routes
app.use('/api/properties', require('./routes/property.routes.js'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});



//this is cluster 
//mongodb+srv://aftabshekh8177_db_user:Aftab@8177090150@cluster0.t6ldkva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0