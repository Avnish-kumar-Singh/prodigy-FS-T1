import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>🛒 Local Store</h4>
          <p>Your trusted destination for quality products at the best prices.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@localstore.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Local Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
