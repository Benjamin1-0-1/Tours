import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Top Destinations</h4>
          <ul>
            <li>Masai Mara</li>
            <li>Serengeti</li>
            <li>Ngorongoro</li>
            <li>Amboseli</li>
            <li>Lake Manyara</li>
            <li>Tarangire</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Payment Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>+254 757 836 023</p>
          <p>Quote Request Form</p>
          <div className="footer-social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="footer-column">
          <h4>Our Offices</h4>
          <p>
            <strong>KENYA</strong><br />
            Norfolk Towers, Kijabe Street<br />
            Block G Rooms 1 &amp; 2, Nairobi.
          </p>
          <p>
            <strong>TANZANIA</strong><br />
            Gilgal Business Centre, Sakina<br />
            Arusha
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MUFASA Tours & Travels. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
