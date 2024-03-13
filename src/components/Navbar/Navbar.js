import React, { useRef } from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/logo.svg';

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div>
      <header>
        <Link to="Home" smooth duration={500} onClick={showNavbar}>
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <nav ref={navRef}>
          <Link to="Home" smooth duration={500} onClick={showNavbar}>
            Home
          </Link>
          <Link to="About" smooth duration={500} onClick={showNavbar}>
            About
          </Link>
          <Link to="Portfolio" smooth duration={500} onClick={showNavbar}>
            Portfolio
          </Link>
          <Link to="Contact" smooth duration={500} onClick={showNavbar}>
            Contact
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
