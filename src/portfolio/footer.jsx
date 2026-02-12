import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2026 Ishan Patel. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/portfolio-performance">Portfolio Performance</Link>
      </div>
    </div>
  );
};

export default Footer;
