// src/pages/ToursPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ToursPage.css';

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tours')
      .then(res => {
        setTours(res.data.tours);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch tours:', err);
        setError('Failed to load tours. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="tours-status">Loading tours...</div>;
  if (error) return <div className="tours-status error">{error}</div>;

  return (
    <div className="tours-page">
      <h2 className="tours-heading">Our Tours in Kenya</h2>
      <div className="tours-grid">
        {tours.map(tour => (
          <div key={tour.id} className="tour-card">
            <img
              src={`/images/tours/${tour.imageFilename}`}
              alt={tour.name}
              className="tour-image"
            />
            <div className="tour-info">
              <h3 className="tour-title">{tour.name}</h3>
              <p className="tour-description">{tour.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToursPage;
