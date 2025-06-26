import React from 'react';
import './AboutUs.css';

// Static data
const aboutData = {
  heroTitle: 'Our Story',
  heroSubtitle: 'Passionate about Safari Adventures',
  heroImage: '/images/img1.jpeg',
  whoWeAre: `
    <p>MUFASA Tours & travels was founded on a passion for wildlife and cultural immersion. We believe every journey should be as unique as the traveler, offering bespoke safaris across East Africa’s most iconic landscapes.</p>
  `,
  whyChooseUs: [
    { title: 'Expert Local Guides', content: 'Our team of certified guides brings you closer to nature with safety and storytelling.' },
    { title: 'Tailor-Made Itineraries', content: 'Custom-designed routes to match your interests, schedule, and budget.' },
    { title: 'Commitment to Sustainability', content: 'We partner with local communities to support conservation and responsible tourism.' }
  ],
  reviewsIntro: 'What Our Travelers Say',
  reviews: [
    { name: 'Alice Johnson', source: 'TripAdvisor', text: 'An unforgettable safari—MUFASA delivered beyond expectations!' },
    { name: 'Michael Lee', source: 'Google Reviews', text: 'Highly professional and personalized service throughout.' }
  ],
  accreditationsTitle: 'Our Accreditations',
  accreditationsLogos: [
    { img: '/images/img2.jpeg', alt: 'World Travel Awards' },
    { img: '/images/img3.jpeg', alt: 'Safari Association of Kenya' }
  ],
  finalBannerText: 'Ready for your next adventure? Contact MUFASA Tours & Travels today!'
};

export default function AboutUs() {
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
  } = aboutData;

  return (
    <div className="about-page">
      {/* Hero Section */}
      <header
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}//check here
      >
        <div className="hero-overlay">
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </div>
      </header>

      <section className="who-section">
        <h2>Who We Are</h2>
        <div
          className="who-content"
          dangerouslySetInnerHTML={{ __html: whoWeAre }}
        />
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="reviews-section">
        <h2>{reviewsIntro}</h2>
        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card">
              <p className="review-text">“{rev.text}”</p>
              <p className="review-author">— {rev.name}, <em>{rev.source}</em></p>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations (not very necessary) */}
      <section className="accreditations-section">
        <h2>{accreditationsTitle}</h2>
        <div className="accreditations-grid">
          {accreditationsLogos.map((logo, idx) => (
            <div key={idx} className="accreditation-logo">
              <img src={logo.img} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Final Banner */}
      <footer className="about-banner">
        <p>{finalBannerText}</p>
      </footer>
    </div>
  );
}
