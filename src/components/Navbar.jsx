import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/logo.svg';

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('transform-none');
  };

  return (
    <div>
      <header className="bg-gray-800 text-white fixed w-full z-50 h-24 flex items-center px-6">
        <Link to="Home" smooth duration={500} onClick={showNavbar}>
          <img src={Logo} alt="logo" className="w-24 h-30 transition-filter duration-300 ease-in-out hover:filter brightness-150 hover:drop-shadow-lg" />
        </Link>
        <nav ref={navRef} className="hidden md:flex ml-auto gap-8 space-x-8 items-center">
          <Link to="Home" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
            Home
          </Link>
          <Link to="About" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
            About
          </Link>
          <Link to="Portfolio" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
            Portfolio
          </Link>
          <Link to="Contact" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
            Contact
          </Link>
          <button className="md:hidden absolute top-8 right-8 text-2xl" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="md:hidden text-2xl ml-auto" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <nav ref={navRef} className="md:hidden fixed top-0 left-0 h-[70vh] w-full flex flex-col items-center justify-center gap-8 bg-gray-800 transition-transform duration-1000 transform -translate-y-full">
        <Link to="Home" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
          Home
        </Link>
        <Link to="About" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
          About
        </Link>
        <Link to="Portfolio" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
          Portfolio
        </Link>
        <Link to="Contact" smooth duration={500} className="text-lg font-bold hover:text-yellow-500" onClick={showNavbar}>
          Contact
        </Link>
        <button className="absolute top-8 right-8 text-2xl" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
