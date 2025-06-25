import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';
console.log('HomePage component loaded');

// Static data for safari packages, now with per-package placeholder images
const safariPackages = [
  { id: 1, title: 'Kenya Road Safaris',       subtitle: '(Private Safaris)',   placeholderUrl: '/images/img1.jpg',      imageUrl: '/images/img8.jpeg', link: '/kenya-road-safaris' },

  { id: 2, title: 'Kenya Luxury Safaris',     subtitle: '(Private Safaris)',   placeholderUrl: '/images/img2.jpg',    imageUrl: '/images/img5.jpeg', link: '/kenya-luxury-safaris' },

  { id: 3, title: 'Kenya – Tanzania Safaris', subtitle: '(Combined Tours)',    placeholderUrl: '/images/img3.jpeg',  imageUrl: '/images/img1.jpg', link: '/kenya-tanzania-safaris' },

  { id: 4, title: 'Masai Mara Adventures',    subtitle: '(Wildlife Tours)',    placeholderUrl: '/images/img8.jpeg',      imageUrl: '/images/img5.jpeg', link: '/masai-mara-adventures' },

  { id: 5, title: 'Amboseli Day Trip',        subtitle: '(Day Excursions)',    placeholderUrl: '/images/img5.jpeg',  imageUrl: '/images/img3.jpeg', link: '/amboseli-day-trip' },

  { id: 6, title: 'Lake Nakuru Retreat',      subtitle: '(Bird Watching)',     placeholderUrl: '/images/img6.jpeg',    imageUrl: '/images/img2.jpg', link: '/lake-nakuru-retreat' },

  { id: 7, title: 'Tsavo East Safari',        subtitle: '(Big Five)',         placeholderUrl: '/images/img7.jpeg',     imageUrl: '/images/img5.jpeg', link: '/tsavo-east-safari' },

  { id: 8, title: 'Samburu Cultural Tour',    subtitle: '(Local Culture)',     placeholderUrl: '/images/img8.jpeg',   imageUrl: '/images/img2.jpg', link: '/samburu-cultural-tour' }
];

const features = [
  {
    id: 1,
    icon: '🐾',
    title: 'Leading Tours and Travel Agent',
    text: 'Mufasa Travels is one of the best leading Tours and Travel Companies in Kenya, Africa, offering unique and affordable travel packages.'
  },
  {
    id: 2,
    icon: '🐾',
    title: 'Best Tour Packages',
    text: 'We offer all-season holiday tours and safaris with modern 4×4 vehicles equipped for exceptional safari experiences.'
  },
  {
    id: 3,
    icon: '🐾',
    title: 'Reliable Travel Agency',
    text: 'Fast, reliable, and friendly service with personally tailored safaris and top-quality lodges for a memorable adventure.'
  }
];

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home')
      .then(res => setData(res.data))
      .catch(err => console.error('Failed to fetch home data:', err));
  }, []);

  if (!data) return <div className="homepage-loading">Loading…</div>;

  return (
    <div className="homepage">
      <section className="about-section">
        <h2 className="about-title">{data.aboutTitle}</h2>
        <p className="about-text">{data.aboutText}</p>
      </section>

      {/* Safari packages grid */}
      <h3 className="packages-heading">Our Safari Packages</h3>
      <div className="packages-grid">
        {safariPackages.map(pkg => (
          <Link
            key={pkg.id}
            to={pkg.link}
            className="card"
            style={{ backgroundImage: `url(${pkg.placeholderUrl})` }}
          >
            <img
              src={pkg.imageUrl}
              alt={pkg.title}
              className="card-image"
            />
            <div className="card-overlay" />
            <div className="card-content">
              <h4 className="card-title">{pkg.title}</h4>
              <p className="card-subtitle">{pkg.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
      <section className="why-section">
        <h3 className="why-heading">WHY CHOOSE US</h3>
        <div className="why-underline" />
        <div className="features-grid">
          {features.map(f => (
            <div key={f.id} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4 className="feature-title">{f.title}</h4>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
