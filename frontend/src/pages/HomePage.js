import { Link } from 'react-router-dom';
import React, { useState, useRef,  useEffect } from 'react';
import './HomePage.css';

const aboutData = {
  aboutTitle: 'Welcome to MUFASA Tours & Travels',
  aboutText: 'Experience the best East African safaris with our expert guides and tailor-made packages. Your adventure starts here.'
};

const safariPackages = [
  {
    id: 'kenya-road-safaris',
    title: 'Kenya Road Safaris',
    subtitle: 'Explore off-road trails and hidden gems',
    slug: 'kenya-road-safaris',
    backgroundImages: [
      '/images/img1.jpeg',
      '/images/img2.jpeg',
      '/images/img3.jpeg'
    ]
  },
  {
    id: 'kenya-luxury-safaris',
    title: 'Kenya Luxury Safaris',
    subtitle: 'Indulge in premium tented camps',
    slug: 'kenya-luxury-safaris',
    backgroundImages: [
      '/images/img4.jpeg',
      '/images/img5.jpeg',
      '/images/img6.jpeg'
    ]
  },
  {
    id: 'kenya-tanzania-safaris',
    title: 'Kenya–Tanzania Safaris',
    subtitle: 'Witness the Great Migration',
    slug: 'kenya-tanzania-safaris',
    backgroundImages: [
      '/images/img1.jpeg',
      '/images/img2.jpeg',
      '/images/img3.jpeg'
    ]
  },
  {
    id: 'masai-mara-adventures',
    title: 'Masai Mara Adventures',
    subtitle: 'Get close to the Big Five',
    slug: 'masai-mara-adventures',
    backgroundImages: [
      '/images/img8.jpeg',
      '/images/img2.jpeg',
      '/images/img6.jpeg'
    ]
  },
  {
    id: 'amboseli-day-trip',
    title: 'Amboseli Day Trip',
    subtitle: 'Elephants with Kilimanjaro views',
    slug: 'amboseli-day-trip',
    backgroundImages: [
      '/images/img1.jpeg',
      '/images/img5.jpeg',
      '/images/img3.jpeg'
    ]
  },
  {
    id: 'lake-nakuru-retreat',
    title: 'Lake Nakuru Retreat',
    subtitle: 'Flamingo-filled shores and peaceful lodges',
    slug: 'lake-nakuru-retreat',
    backgroundImages: [
      '/images/img5.jpeg',
      '/images/img8.jpeg',
      '/images/img3.jpeg'
    ]
  },
  {
    id: 'tsavo-east-safari',
    title: 'Tsavo East Safari',
    subtitle: 'Red earth landscapes & desert-adapted wildlife',
    slug: 'tsavo-east-safari',
    backgroundImages: [
      '/images/img3.jpeg',
      '/images/img8.jpeg',
      '/images/img6.jpeg'
    ]
  },
  {
    id: 'samburu-cultural-tour',
    title: 'Samburu Cultural Tour',
    subtitle: 'Meet the Samburu people & traditions',
    slug: 'samburu-cultural-tour',
    backgroundImages: [
      '/images/img1.jpeg',
      '/images/img8.jpeg',
      '/images/img3.jpeg'
    ]
  }
];

const features = [
  { id: 1, icon: '🐾', title: 'Leading Tour Operator',    text: 'We are among Kenya’s top-rated safari specialists, ensuring seamless adventures.' },
  { id: 2, icon: '🐾', title: 'Tailor-Made Packages',      text: 'Customizable itineraries to fit every traveler’s dream.' },
  { id: 3, icon: '🐾', title: 'Expert Guides',            text: 'Our certified guides bring you closer to wildlife and culture.' }
];

const faqItems = [
  {
    id: 1,
    question: 'What is included in the safari packages?',
    answer: 'All packages include accommodation, game drives, park fees, and meals as outlined in each itinerary.'
  },
  {
    id: 2,
    question: 'How do I book a safari?',
    answer: 'Select your preferred package, fill out the quote request form, and we will be in touch to confirm your booking.'
  },
  {
    id: 3,
    question: 'What is your cancellation policy?',
    answer: 'Cancellations more than 30 days before departure receive a full refund, less any transaction fees.'
  },
  {
    id: 4,
    question: 'Are international flights included?',
    answer: 'International flights are not included, but we can assist with flight bookings upon request.'
  },
  {
    id: 5,
    question: 'Can I customize my itinerary?',
    answer: 'Yes! We specialize in tailor-made safaris. Let us know your interests and we will create a unique itinerary.'
  }
];

const carouselImages = [
  '/images/img2.jpeg',
  '/images/img3.jpeg',
  '/images/img4.jpeg',
  '/images/img5.jpeg',
  '/images/img1.jpeg'
];

function CarouselCard({ pkg }) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);
  const timer = useRef(null);

  const startCarousel = () => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setPrevious(current);
        setCurrent(i => (i + 1) % pkg.backgroundImages.length);
      }, 3000);
    }
  };

  const stopCarousel = () => {
    clearInterval(timer.current);
    timer.current = null;
    setPrevious(null);
  };

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <Link
      to={`/destinations/${pkg.slug}`}
      className="card"
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
    >
      {/* Previous image layer */}
      {previous !== null && (
        <div
          className="bg-layer layer-old"
          style={{ backgroundImage: `url(${pkg.backgroundImages[previous]})` }}
        />
      )}
      {/* Current image layer */}
      <div
        className="bg-layer layer-new"
        style={{ backgroundImage: `url(${pkg.backgroundImages[current]})` }}
      />
      <div className="card-overlay" />
      <div className="card-content">
        <h4 className="card-title">{pkg.title}</h4>
        <p className="card-subtitle">{pkg.subtitle}</p>
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <div className="homepage">
      <section className="intro-section">
        <div className="intro-track">
          {[...carouselImages, ...carouselImages].map((src, i) => (
            <div key={i} className="intro-slide">
              <img src={src} alt={`Slide ${i % carouselImages.length + 1}`} />
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

      <h3 className="packages-heading">Our Safari Packages</h3>
      <div className="packages-grid">
        {safariPackages.map(pkg => (
          <CarouselCard key={pkg.id} pkg={pkg} />
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

export default HomePage;
