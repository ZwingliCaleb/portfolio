import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo2.png';
import { Link } from 'react-scroll';
function Header() {
  return (
    <div>
      <header className="App-header">
        <nav>
            <ul>
            <Link to="Home" smooth={true} duration={500}><img src={logo} alt="logo" className="logo" /></Link>
            <Link to="Home" smooth={true} duration={500}>Home</Link>
            <Link to="About" smooth={true} duration={500}>About</Link>
            <Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link>
            <Link to="Contact" smooth={true} duration={500}>Contact</Link>  
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
  