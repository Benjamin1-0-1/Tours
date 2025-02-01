import React from 'react';
import '../components/Footer.css';


function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top-destinations">
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

      <div className="footer-company">
        <h4>Company</h4>
        <ul>
          <li>About us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Payment Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact us</h4>
        <p>+254 757 836 023</p>
        <p>Quote Request Form</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div className="footer-offices">
        <h4>Our Offices</h4>
        <p><strong>KENYA</strong><br/>Norfolk Towers, Kijabe Street<br/>Block G Rooms 1 & 2, Nairobi.</p>
        <p><strong>TANZANIA</strong><br/>Gilgal Business Centre, Sakina<br/>Arusha</p>
      </div>
    </footer>
  );
}

export default Footer;
