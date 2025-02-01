import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToursList from '../components/ToursList';

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tours')
      .then((res) => {
        setTours(res.data.tours);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch tours:", err);
        setError("Failed to fetch tours");
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: '2rem' }}>Loading tours...</div>;
  if (error) return <div style={{ padding: '2rem' }}>{error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Tours</h2>
      <ToursList tours={tours} />
    </div>
  );
}

export default ToursPage;
