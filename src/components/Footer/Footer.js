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
        <a href="https://www.linkedin.com/in/caleb-zwingli-566b5320b/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/ZwingliCaleb" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://medium.com/@calebzwingli" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </div>
      <div className="footer-info">
        <p>&copy;{currentYear} Caleb Zwingli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
