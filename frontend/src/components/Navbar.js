import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when window is resized above breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">MUFASA Tours & Travels</div>

      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span className="hamburger">&#9776;</span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/tours" onClick={() => setMenuOpen(false)}>Tours</Link></li>
        <li><Link to="/destinations" onClick={() => setMenuOpen(false)}>Destinations</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        <li className="quote-btn"><Link to="/request-a-quote" onClick={() => setMenuOpen(false)}>Request a Quote</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
