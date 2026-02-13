import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
      <p>&copy; 2026 Ishan Patel. All rights reserved.</p>
      <div className="footer-links">
        {location.pathname === '/' ? (
          <Link to="/portfolio-performance">Portfolio Performance</Link>
        ) : (
          <Link to="/">Back to Portfolio</Link>
        )}
      </div>
    </div>
  );
};

export default Footer;
