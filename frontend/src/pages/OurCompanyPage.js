import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OurCompanyPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/about/our-company')
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch about us data:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading Our Company info...</div>;
  }

  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    whoWeAre,
    whyChooseUs,
    reviewsIntro,
    reviews,
    accreditationsTitle,
    accreditationsLogos,
    finalBannerText
  } = data;

  return (
    <div>
      {/* Hero section */}
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

      {/* Who We Are */}
      <div style={{ padding: '2rem' }}>
        <h2>About Us</h2>
        <h3>Who We Are</h3>
        <div
          dangerouslySetInnerHTML={{ __html: whoWeAre }}
          style={{ marginTop: '1rem' }}
        />
      </div>

      {/* Why Choose Us (cards) */}
      <div style={{ padding: '2rem' }}>
        <h2>Why Choose Us</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {whyChooseUs && whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 300px',
                background: '#f9f9f9',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Traveller Reviews */}
      <div style={{ padding: '2rem', background: '#fafafa' }}>
        <h2>{reviewsIntro}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          {reviews && reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 250px',
                background: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <h4>{rev.name}</h4>
              <p style={{ fontStyle: 'italic', margin: '0.5rem 0' }}>{rev.source}</p>
              <p>{rev.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditations */}
      <div style={{ padding: '2rem' }}>
        <h2>{accreditationsTitle}</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {accreditationsLogos && accreditationsLogos.map((logo, idx) => (
            <div key={idx} style={{ width: '120px' }}>
              <img src={logo.img} alt={logo.alt} style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Final Banner Text */}
      <div style={{ background: '#eee', padding: '2rem', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>{finalBannerText}</p>
      </div>
    </div>
  );
}

export default OurCompanyPage;
