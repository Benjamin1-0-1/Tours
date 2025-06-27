import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { safariPackages } from '../data/safariData';
import './HomePage.css';

const features = [
  { id: 1, icon: '🐾', title: 'Leading Tour Operator', text: 'We are among Kenya’s top-rated safari specialists, ensuring seamless adventures.' },
  { id: 2, icon: '🐾', title: 'Tailor-Made Packages',   text: 'Customizable itineraries to fit every traveler’s dream.' },
  { id: 3, icon: '🐾', title: 'Expert Guides',         text: 'Our certified guides bring you closer to wildlife and culture.' }
];

const faqItems = [
  { id: 1, question: 'What is included in the safari packages?', answer: 'All packages include accommodation, game drives, park fees, and meals as outlined in each itinerary.' },
  { id: 2, question: 'How do I book a safari?',                    answer: 'Select your preferred package, fill out the quote request form, and we will be in touch to confirm your booking.' },
  { id: 3, question: 'What is your cancellation policy?',         answer: 'Cancellations more than 30 days before departure receive a full refund, less any transaction fees.' },
  { id: 4, question: 'Are international flights included?',      answer: 'International flights are not included, but we can assist with flight bookings upon request.' },
  { id: 5, question: 'Can I customize my itinerary?',            answer: 'Yes! We specialize in tailor-made safaris. Let us know your interests and we will create a unique itinerary.' }
];

const carouselImages = [
  '/images/img2.jpeg',
  '/images/img3.jpeg',
  '/images/img4.jpeg',
  '/images/img5.jpeg',
  '/images/img1.jpeg'
];

function HoverCard({ pkg }) {
  const [hover, setHover] = useState(false);

  // On hover: show second image, otherwise first
  const bgUrl = hover
    ? pkg.backgroundImages[1]
    : pkg.backgroundImages[0];

  return (
    <Link
      to={`/destinations/${pkg.slug}`}
      className="card"
      style={{ backgroundImage: `url(${bgUrl})` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-overlay" />
      <div className="card-content">
        <h4 className="card-title">{pkg.title}</h4>
        <p className="card-subtitle">{pkg.subtitle}</p>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Intro Carousel */}
      <section className="intro-section">
        <div className="intro-track">
          {[...carouselImages, ...carouselImages].map((src, i) => (
            <div key={i} className="intro-slide">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
        <div className="intro-overlay" />
        <div className="intro-content">
          <h1 className="brand-intro">MUFASA Tours &amp; Travels</h1>
          <p>
            Discover East Africa’s wild heart with bespoke safaris—where wildlife,
            culture, and comfort meet under the African sky.
          </p>
          <hr className="section-separator" />
        </div>
      </section>

      {/* Packages Grid */}
      <h3 className="packages-heading">Our Safari Packages</h3>
      <div className="packages-grid">
        {safariPackages.map(pkg => (
          <HoverCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>

      {/* Why Choose Us */}
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

      {/* FAQ */}
      <section className="faq-section">
        <h3 className="faq-heading">Frequently Asked Questions</h3>
        <hr className="section-separator" />
        <div className="faq-list">
          {faqItems.map(item => (
            <details key={item.id} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
