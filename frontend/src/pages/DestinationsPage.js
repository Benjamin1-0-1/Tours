import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DestinationsPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/destinations')
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch destinations:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading Destinations...</div>;
  }

  const { heroTitle, heroSubtitle, heroImage, introText, destinations } = data;

  return (
    <div>
      <div
        style={{
          height: '300px',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
          <h1 style={{ color: '#fff', margin: 0 }}>{heroTitle}</h1>
          <p style={{ color: '#fff', margin: 0 }}>{heroSubtitle}</p>
        </div>
      </div>
      <div style={{ padding: '2rem' }}>
        <h2>Destinations</h2>
        <p>{introText}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {destinations.map((dest) => (
            <div key={dest.id} onClick={() => navigate(`/destinations/${dest.slug || dest.id}`)} style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
              <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1rem' }}>
                <h3>{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage;
