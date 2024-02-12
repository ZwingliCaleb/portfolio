// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="link-to-your-facebook-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="link-to-your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="link-to-your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="link-to-your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; {currentYear} Caleb Zwingli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
