import React from 'react';
import './HeroSection.css';

function HeroSection({ title, subtitle, backgroundImage }) {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default HeroSection;
