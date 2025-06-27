// src/pages/DestinationDetailPage.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './DestinationDetailPage.css';

// Static details for each safari package
const safariDetails = {
  'kenya-road-safaris': {
    title: 'Kenya Road Safaris',
    heroImage: '/images/packages/road-1.jpg',
    overview: `Embark on an off-road adventure through Kenya’s heartland. Our classic Road Safari takes you into lesser-known trails, crossing rivers, plains, and forests in search of the Big Five and colorful birdlife. Perfect for the traveler who craves authenticity and rugged exploration.`,
    itinerary: [
      'Day 1: Pickup in Nairobi & transfer to Amboseli National Park',
      'Day 2: Morning and evening game drives in Amboseli',
      'Day 3: Drive to Tsavo West via Shetani lava flow',
      'Day 4: Full-day Tsavo East exploration',
      'Day 5: Return to Nairobi, departure'
    ],
    highlights: [
      'Pop-up roof Land Cruiser',
      'Expert tracker and driver-guide',
      'Authentic bush camping option',
      'Local Maasai village visit'
    ],
    gallery: [
      '/images/detail/road-2.jpg',
      '/images/detail/road-3.jpg',
      '/images/detail/road-4.jpg'
    ]
  },
  'kenya-luxury-safaris': {
    title: 'Kenya Luxury Safaris',
    heroImage: '/images/packages/luxury-1.jpg',
    overview: `Enjoy the finest in high-end safari lodges, gourmet dining, and personalized service. From exclusive tented camps overlooking watering holes to private game drives, our Luxury Safari ensures you travel in ultimate comfort without sacrificing wildlife encounters.`,
    itinerary: [
      'Day 1: Fly into private airstrip & transfer to Solomon’s Camp',
      'Day 2: Morning walking safari + afternoon spa treatment',
      'Day 3: Hot-air balloon ride at dawn & champagne breakfast',
      'Day 4: Transfer to Lewa House for rhino tracking',
      'Day 5: Charter flight back to Nairobi'
    ],
    highlights: [
      '5-star tented camps',
      'Private vehicle & guide',
      'Hot-air balloon safari',
      'All-inclusive gourmet meals'
    ],
    gallery: [
      '/images/detail/luxury-2.jpg',
      '/images/detail/luxury-3.jpg',
      '/images/detail/luxury-4.jpg'
    ]
  },
  'kenya-tanzania-safaris': {
    title: 'Kenya–Tanzania Safaris',
    heroImage: '/images/packages/migration-1.jpg',
    overview: `Follow the Great Migration as millions of wildebeest and zebra traverse the Serengeti-Maasai Mara ecosystem. Enjoy seamless border crossings, prime river crossings, and expert-led game drives in two of East Africa’s top reserves.`,
    itinerary: [
      'Day 1: Maasai Mara game drive',
      'Day 2: Wildebeest river crossing at Mara River',
      'Day 3: Transfer to Serengeti National Park',
      'Day 4: Full-day Serengeti exploration',
      'Day 5: Ngorongoro Crater descent and drive to Arusha'
    ],
    highlights: [
      'Great Migration viewing',
      'Ngorongoro Crater tour',
      'Local cultural visit',
      'Glossy lion and leopard sightings'
    ],
    gallery: [
      '/images/detail/migration-2.jpg',
      '/images/detail/migration-3.jpg',
      '/images/detail/migration-4.jpg'
    ]
  },
  // Add similar objects for the remaining packages...
};

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const safari = safariDetails[slug];

  if (!safari) {
    return <Navigate to="/" replace />; // redirect if not found
  }

  return (
    <div className="detail-page">
      <header
        className="detail-hero"
        style={{ backgroundImage: `url(${safari.heroImage})` }}
      >
        <h1 className="detail-title">{safari.title}</h1>
      </header>

      <section className="detail-overview">
        <p>{safari.overview}</p>
      </section>

      <section className="detail-gallery">
        {safari.gallery.map((src, i) => (
          <img key={i} src={src} alt={`${safari.title} ${i+1}`} />
        ))}
      </section>

      <section className="detail-itinerary">
        <h2>Itinerary</h2>
        <ul>
          {safari.itinerary.map((step, i) => <li key={i}>{step}</li>)}
        </ul>
      </section>

      <section className="detail-highlights">
        <h2>Highlights</h2>
        <ul>
          {safari.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </section>

      <div className="detail-actions">
        <Link to="/request-a-quote" className="btn-quote">Request a Quote</Link>
        <Link to="/contact-us" className="btn-contact">Contact Us</Link>
      </div>
    </div>
  );
}
