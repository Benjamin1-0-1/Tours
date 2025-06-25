import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">MUFASA Tours &amp; Travels</div>
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className="hamburger">&#9776;</span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {['/', '/tours', '/destinations', '/about', '/contact-us', '/request-quote']
          .map((path, i) => {
            const labels = ['Home','Tours','Destinations','About Us','Contact Us','Request Quote'];
            const cls = (i===5? 'quote-btn' : '');
            return (
              <li key={path} className={cls}>
                <Link to={path} onClick={()=>setMenuOpen(false)}>
                  {labels[i]}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Navbar;
