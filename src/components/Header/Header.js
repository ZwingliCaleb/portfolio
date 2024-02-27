import React from 'react';
import './Header.scss';
import { Link } from 'react-scroll';
function Header() {
  return (
    <div>
      <header className="Header">
        <nav>
            <ul>
              <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="About" smooth={true} duration={500}>About</Link></li>
              <li><Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link></li>
              <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>  
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
  