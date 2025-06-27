import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { safariDetails } from '../data/safariData';
import './DestinationDetailPage.css';

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const safari = safariDetails[slug];
  if (!safari) return <Navigate to="/" replace />;

  return (
    <div className="detail-page">
      <header className="detail-hero"
        style={{ backgroundImage:`url(${safari.heroImage})` }}>
        <h1 className="detail-title">{slug.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ')}</h1>
      </header>

      <section className="detail-overview">
        <p>{safari.overview}</p>
      </section>

      <section className="detail-gallery">
        {safari.gallery.map((src,i)=>(
          <img key={i} src={src} alt="" />
        ))}
      </section>

      <section className="detail-itinerary">
        <h2>Itinerary</h2>
        <ul>{safari.itinerary.map((step,i)=><li key={i}>{step}</li>)}</ul>
      </section>

      <section className="detail-highlights">
        <h2>Highlights</h2>
        <ul>{safari.highlights.map((h,i)=><li key={i}>{h}</li>)}</ul>
      </section>

      <div className="detail-actions">
        <a href="/request-a-quote" className="btn-quote">Request a Quote</a>
        <a href="/contact-us"      className="btn-contact">Contact Us</a>
      </div>
    </div>
  );
}
