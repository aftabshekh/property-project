const express = require('express');
const router = express.Router();
const Property = require('../models/property.model.js');

// @route   GET /api/properties
// @desc    Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 }); // Get newest first
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/properties
// @desc    Add a new property
router.post('/', async (req, res) => {
  try {
    const { name, type, location, price, description, imageUrl } = req.body;
    const newProperty = new Property({
      name, type, location, price, description, imageUrl,
    });
    const property = await newProperty.save();
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/properties/:id
// @desc    Delete a property by ID
router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ msg: 'Property not found' });
    }
    await Property.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Property deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
