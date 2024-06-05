import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 text-center h-32vh md:h-18vh">
      <div className="text-2xl md:text-xl mt-5">
        <a href="https://www.linkedin.com/in/caleb-zwingli-566b5320b/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-500">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/ZwingliCaleb" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-500">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-500">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://medium.com/@calebzwingli" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-500">
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </div>
      <div className="mt-5 md:mt-2">
        <p className="text-sm md:text-xs font-bold font-josefin">&copy;{currentYear} Caleb Zwingli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
