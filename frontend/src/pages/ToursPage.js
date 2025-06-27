import React from 'react';
import { safariPackages } from '../data/safariData';
import { Link } from 'react-router-dom';
import './ToursPage.css';

export default function ToursPage() {
  return (
    <div className="tours-page">
      <h2 className="tours-heading">Our Tours in Kenya</h2>
      <div className="tours-grid">
        {safariPackages.map(pkg => (
          <TourCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

function TourCard({ pkg }) {
  const [idx,setIdx] = React.useState(0);
  React.useEffect(() => {
    const iv = setInterval(()=>{
      setIdx(i=>(i+1)%pkg.backgroundImages.length);
    },4000);
    return ()=>clearInterval(iv);
  },[pkg.backgroundImages]);

  return (
    <Link to={`/destinations/${pkg.slug}`} className="tour-card"
      style={{ backgroundImage:`url(${pkg.backgroundImages[idx]})` }}>
      <div className="tour-overlay" />
      <div className="tour-info">
        <h3 className="tour-title">{pkg.title}</h3>
        <p className="tour-desc">{pkg.subtitle}</p>
      </div>
    </Link>
  );
}
