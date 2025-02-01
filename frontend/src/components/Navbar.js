import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">MUFASA Tours & Travels</div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tours">Tours</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li
          className="dropdown"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <span>About Us</span>
          {aboutOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/about/our-company">Our Company</Link></li>
              <li><Link to="/about/fleet-guides">Fleet & Guides</Link></li>
              <li><Link to="/about/media">Media</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li className="quote-btn"><Link to="/request-a-quote">Request a Quote</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
