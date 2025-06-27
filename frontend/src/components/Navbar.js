import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/',                   label: 'Home' },
  { to: '/tours',              label: 'Tours' },
  { to: '/about-us',  label: 'About Us' },
  { to: '/fleets',       label: 'Fleets' },
  { to: '/contact-us',         label: 'Contact Us' },
  { to: '/request-a-quote',    label: 'Request Quote', className: 'quote-btn' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="logo-link">MUFASA Tours &amp; Travels</NavLink>
      </div>
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span className="hamburger">&#9776;</span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {navItems.map(({ to, label, className }) => (
          <li key={to} className={className || ''}>
            <NavLink
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? 'active-link' : undefined}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
