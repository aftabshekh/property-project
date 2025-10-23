import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import PropertyList from './components/PropertyList';
import FilterBar from './components/FilterBar';
import AddPropertyForm from './components/AddPropertyForm';
import PropertyModal from './components/PropertyModal';
import Modal from './components/Modal';
import styles from './App.module.css';

// IMPORTANT: This now reads from your Vercel/Vite environment variables
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // ... (rest of your file is identical) ...
  const [filterType, setFilterType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL); // This now uses the VITE_API_URL
      setProperties(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch properties. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleAddProperty = async (newProperty) => {
    try {
      await axios.post(API_URL, newProperty); // This now uses the VITE_API_URL
      fetchProperties(); // Re-fetch
      setIsAddModalOpen(false);
    } catch (err) {
      console.error('Failed to add property:', err);
      alert('Failed to add property.');
    }
  };

  const handleDeleteProperty = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await axios.delete(`${API_URL}/${id}`); // This now uses the VITE_API_URL
        fetchProperties(); // Re-fetch
      } catch (err) {
        console.error('Failed to delete property:', err);
        alert('Failed to delete property.');
      }
    }
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      const matchesSearch =
        prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        filterType === 'All' || prop.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [properties, searchTerm, filterType]);

  const propertyTypes = useMemo(() => {
    const types = new Set(properties.map(p => p.type));
    return ['All', ...types];
  }, [properties]);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>Property Listings</h1>
        <button
          className={styles.primaryButton}
          onClick={() => setIsAddModalOpen(true)}
        >
          + Add Property
        </button>
      </header>

      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        filterType={filterType}
        onFilterChange={(e) => setFilterType(e.target.value)}
        propertyTypes={propertyTypes}
      />

      {loading && <p>Loading properties...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && (
        <PropertyList
          properties={filteredProperties}
          onViewDetails={setSelectedProperty}
          onDelete={handleDeleteProperty}
        />
      )}

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <AddPropertyForm
          onSubmit={handleAddProperty}
          onClose={() => setIsAddModalOpen(false)}
        />
      </Modal>

      {selectedProperty && (
        <Modal isOpen={!!selectedProperty} onClose={() => setSelectedProperty(null)}>
          <PropertyModal property={selectedProperty} />
        </Modal>
      )}
    </div>
  );
}
export default App;