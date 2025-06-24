import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DestinationsPage.css';

function DestinationsPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/destinations')
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch destinations:', err));
  }, []);

  if (!data) {
    return <div className="loading">Loading Destinations…</div>;
  }

  const { heroTitle, heroSubtitle, heroImage, introText, destinations } = data;

  // If your API returns the raw public path (frontend/public/images/hero.jpg),
  // uncomment the line below to strip off the extra bits:
  const heroUrl = heroImage  ? `/images/${heroImage.replace(/^.*public/, '')}`  : '/images/img1.jpg';   // pick a sensible fallback

  // Otherwise, if your API now just returns "hero.jpg", use this:
  // const heroUrl = `/images/${heroImage}`;

  return (
    <div className="destinations-page">
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroUrl})` }}
      >
        <div className="hero-overlay">
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </div>
      </div>

      <section className="intro">
        <h2>Destinations</h2>
        <p>{introText}</p>
      </section>

      <section className="grid">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="card"
            onClick={() =>
              navigate(`/destinations/${dest.slug || dest.id}`)
            }
          >
            <img
              src={`/images/${dest.image.replace(/^.*public/, '')}`}
              alt={dest.name}
            />
            <h3>{dest.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DestinationsPage;
