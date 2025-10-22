import React from 'react';
import styles from './PropertyModal.module.css';

function PropertyModal({ property }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className={styles.modalContent}>
      <img src={property.imageUrl} alt={property.name} className={styles.modalImage} />
      <div className={styles.modalDetails}>
        <h2>{property.name}</h2>
        <span className={styles.modalType}>{property.type}</span>
        <p className={styles.modalLocation}>{property.location}</p>
        <p className={styles.modalPrice}>{formatPrice(property.price)}</p>
        <p className={styles.modalDescription}>{property.description}</p>
      </div>
    </div>
  );
}
export default PropertyModal;