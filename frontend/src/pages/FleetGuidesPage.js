import React from 'react';
import './FleetGuides.css';

// Static data
const fleetData = {
  heroTitle: 'Our Fleet & Guides',
  heroSubtitle: 'Reliable Vehicles and Expert Guides',
  heroImage: '/images/fleet-hero.jpg',
  introText: `Our fleet consists of modern, well-maintained 4×4 vehicles designed for comfort and safety in the African wilderness. Paired with our experienced local guides, your safari experience will be unforgettable.`,
  vehicles: [
    {
      name: 'Toyota Land Cruiser',
      description: 'Spacious 4×4 with pop-up roof for optimal game viewing.',
      img: '/images/img1.jpeg'
    },
    {
      name: 'Land Rover Defender',
      description: 'Durable off-road vehicle with ample storage space.',
      img: '/images/img2.jpeg'
    },
    {
      name: 'Toyota Hiace Minibus',
      description: 'Ideal for group transfers and short tours.',
      img: '/images/img3.jpeg'
    }
  ],
  features: [
    { title: 'Comfort & Safety', text: 'All vehicles are equipped with seat belts, first-aid kits, and emergency communication.' },
    { title: 'Experienced Guides', text: 'Our guides are certified, bilingual, and have deep knowledge of flora & fauna.' },
    { title: '24/7 Support', text: 'We provide round-the-clock assistance and backup vehicles if needed.' }
  ]
};

export default function FleetGuidesPage() {
  const { heroTitle, heroSubtitle, heroImage, introText, vehicles, features } = fleetData;

  return (
    <div className="fleet-page">
      <header className="fleet-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="fleet-hero-overlay">
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </div>
      </header>

      <section className="fleet-intro">
        <p>{introText}</p>
      </section>

      <section className="vehicles-section">
        <h2>Our Vehicles</h2>
        <div className="vehicles-grid">
          {vehicles.map((v, idx) => (
            <div key={idx} className="vehicle-card">
              <img src={v.img} alt={v.name} className="vehicle-image" />
              <div className="vehicle-info">
                <h3>{v.name}</h3>
                <p>{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Our Fleet</h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
