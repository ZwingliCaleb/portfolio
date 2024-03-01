import React, {useRef} from 'react';
import './Header.scss';
import { Link } from 'react-scroll';
import {FaTimes, FaBars} from 'react-icons/fa';
function Header() {
  const navRef = useRef();

  const showNavbar =() => {
    navRef.current.classlist.toggle("responsive_nav")
  }

  return (
    <div>
      <header className="Header">
        <h3>Zwingli</h3>
        <nav className="nav-container" ref={navRef}>
            <ul>
              <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="About" smooth={true} duration={500}>About</Link></li>
              <li><Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link></li>
              <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
              <button onClick={showNavbar}>
                <FaTimes />
              </button>  
            </ul>
            <button onClick={showNavbar}>
              <FaBars />
            </button>
        </nav>
      </header>
    
    </div>
  );
}

export default Header
  