import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo2.png';
import { Link } from 'react-scroll';
function Header() {
  return (
    <div>
      <header className="header">
        <nav>
            <ul>
            <li><Link to="img" smooth={true} duration={500}><img src={logo} alt="logo" className="logo" /></Link></li>
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
  