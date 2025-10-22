const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, enum: ['House', 'Apartment', 'Villa', 'Condo'] },
  location: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, default: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg' },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Property', PropertySchema);