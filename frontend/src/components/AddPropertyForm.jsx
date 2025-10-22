import React, { useState } from 'react';
import styles from './AddPropertyForm.module.css';

function AddPropertyForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'House',
    location: '',
    price: '',
    description: '',
    imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.location || !formData.price || !formData.description) {
      alert('Please fill out all fields.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add New Property</h2>
      <div className={styles.formGroup}>
        <label>Property Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Property Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Condo">Condo</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Price ($)</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Image URL</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div className={styles.buttonGroup}>
        <button type="button" className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          Add Property
        </button>
      </div>
    </form>
  );
}
export default AddPropertyForm;