import React from 'react';
import styles from './PropertyCard.module.css';

function PropertyCard({ property, onViewDetails, onDelete }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className={styles.card}>
      <img src={property.imageUrl} alt={property.name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{property.name}</h3>
        <p className={styles.cardLocation}>{property.location}</p>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>{formatPrice(property.price)}</span>
          <span className={styles.cardType}>{property.type}</span>
        </div>
        <p className={styles.cardDescription}>
          {property.description.substring(0, 100)}...
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.viewButton}
            onClick={() => onViewDetails(property)}
          >
            View Details
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(property._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default PropertyCard;