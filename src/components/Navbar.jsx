import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/Logo2.svg';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('translate-y-0');
  };

  return (
    <header className="bg-gray-950 text-white fixed w-full z-50 h-24 flex items-center px-6">
      <Link to="Home" smooth duration={500}>
        <img src={Logo} alt="logo" className="w-24 h-auto transition-filter duration-300 ease-in-out hover:filter brightness-150 hover:drop-shadow-lg" />
      </Link>
      <nav ref={navRef} className="hidden md:flex ml-auto gap-8 space-x-8 font-montserrat items-center">
        <Link to="Home" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]">
          Home
        </Link>
        <Link to="About" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]">
          About
        </Link>
        <Link to="Portfolio" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]">
          Portfolio
        </Link>
        <Link to="Contact" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]">
          Contact
        </Link>
      </nav>
      <button className="md:hidden text-2xl ml-auto" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav ref={navRef} className="md:hidden font-montserrat fixed top-0 left-0 h-1/2 w-full flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-gray-950 to-blue-950 transition-transform duration-300 transform -translate-y-full">
        <Link to="Home" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]" onClick={showNavbar}>
          Home
        </Link>
        <Link to="About" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]" onClick={showNavbar}>
          About
        </Link>
        <Link to="Portfolio" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]" onClick={showNavbar}>
          Portfolio
        </Link>
        <Link to="Contact" smooth duration={500} className="text-lg font-bold hover:text-[#f23f67]" onClick={showNavbar}>
          Contact
        </Link>
        <button className="absolute top-8 right-8 text-2xl" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
