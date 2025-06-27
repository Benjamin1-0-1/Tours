// src/pages/ToursPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ToursPage.css';

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tours')
      .then(res => {
        // Expecting res.data.tours = [{ id, slug, name, description, images: [] }, …]
        setTours(res.data.tours);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch tours:', err);
        setError('Could not load tours right now.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="tours-status">Loading tours…</div>;
  if (error)   return <div className="tours-status error">{error}</div>;

  return (
    <div className="tours-page">
      <h2 className="tours-heading">Our Tours in Kenya</h2>
      <div className="tours-grid">
        {tours.map(tour => (
          <CarouselCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

// Carousel‐background card for each tour
function CarouselCard({ tour }) {
  const images = tour.images; // array of local image paths, e.g. ['/images/tours/masai1.jpg', …]
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(iv);
  }, [images.length]);

  return (
    <Link
      to={`/tours/${tour.slug}`}
      className="tour-card"
      style={{ backgroundImage: `url(${images[idx]})` }}
    >
      <div className="tour-overlay" />
      <div className="tour-info">
        <h3 className="tour-title">{tour.name}</h3>
        <p className="tour-desc">{tour.description}</p>
      </div>
    </Link>
  );
}

export default ToursPage;
