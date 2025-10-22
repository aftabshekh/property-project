import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './PropertyList.module.css';

function PropertyList({ properties, onViewDetails, onDelete }) {
  if (properties.length === 0) {
    return <p className={styles.noResults}>No properties found.</p>;
  }
  return (
    <div className={styles.listContainer}>
      {properties.map((property) => (
        <PropertyCard
          key={property._id} // Use _id from MongoDB
          property={property}
          onViewDetails={onViewDetails}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default PropertyList;