import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './footer.css';
import { recordButtonClick, SOCIAL_LINKS } from '../utils/analytics';

const Footer = () => {
  const location = useLocation();

  const handleSocialClick = (label, url) => {
    recordButtonClick(`aboutme:${label}`);
    window.open(url, '_blank');
  };

  const socialData = [
    { key: 'resume', ...SOCIAL_LINKS.resume },
    { key: 'linkedin', ...SOCIAL_LINKS.linkedin },
    { key: 'github', ...SOCIAL_LINKS.github }
  ];

  return (
    <div className="footer">
      <p>&copy; 2026 Ishan Patel. All rights reserved.</p>
      <div className="footer-links">
        {socialData.map((social) => (
          <a 
            key={social.key}
            href="#" 
            onClick={(e) => { e.preventDefault(); handleSocialClick(social.label, social.url); }}
          >
            {social.label}
          </a>
        ))}
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
