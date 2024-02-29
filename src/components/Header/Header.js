import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="Header">
        <div className="BurgerMenu" onClick={handleMenuClick}>
          ☰
        </div>
        <nav className="nav-container">
            <ul>
              <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="About" smooth={true} duration={500}>About</Link></li>
              <li><Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link></li>
              <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>  
            </ul>
        </nav>
      </header>
      <Menu isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)}>
        <Link to="Home" smooth={true} duration={500} onClick={handleMenuClick}></Link>
        <Link to="About" smooth={true} duration={500} onClick={handleMenuClick}></Link>
        <Link to="Portfolio" smooth={true} duration={500} onClick={handleMenuClick}></Link>
        <Link to="Contact" smooth={true} duration={500} onClick={handleMenuClick}></Link>
      </Menu>

    </div>
  );
}

export default Header
  