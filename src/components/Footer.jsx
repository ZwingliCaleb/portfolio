import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-blue-950 text-white py-14">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold text-[#f23f67] font-montserrat">Zwingli.</p>
          <p className="text-gray-400 text-sm mt-1">Built with React & ☕</p>
        </div>

        {/* Quick Nav */}
        <nav className="flex gap-6 font-montserrat text-sm font-bold">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              className="text-gray-400 hover:text-[#f23f67] cursor-pointer transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://www.linkedin.com/in/caleb-zwingli-566b5320b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-300"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/ZwingliCaleb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] hover:-translate-y-1 transition-all duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://medium.com/@calebzwingli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"><FontAwesomeIcon icon={faMedium} /></a>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-xs text-gray-500 font-montserrat">&copy;{currentYear} Caleb Zwingli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
