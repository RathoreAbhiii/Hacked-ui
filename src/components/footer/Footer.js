// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>FAQs</li>
            <li>Support</li>
            <li>Legal & Privacy</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: hello@yourwebsite.com</p>
        </div>
        <div className="footer-section address">
          <p>Your Legal Company, Inc.</p>
          <p>123 Main Street, Suite 4A</p>
          <p>Your City, State ZIP</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your Legal Website
      </div>
    </footer>
  );
};

export default Footer;
