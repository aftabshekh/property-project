import React from 'react';
import styles from './FilterBar.module.css';

function FilterBar({ searchTerm, onSearchChange, filterType, onFilterChange, propertyTypes }) {
  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={onSearchChange}
        className={styles.searchInput}
      />
      <select
        value={filterType}
        onChange={onFilterChange}
        className={styles.typeSelect}
      >
        {propertyTypes.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
export default FilterBar;