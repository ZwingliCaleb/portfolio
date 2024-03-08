import { useRef } from 'react';
import './Navbar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    showNavbar();
  }

  return (
    <div>
      <header>
        <h3 onClick={scrollToTop}>Zwingli</h3>
        <nav ref={navRef}>
              <Link to="Home" smooth={true} duration={500}>Home</Link>
              <Link to="About" smooth={true} duration={500 }>About</Link>
              <Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link>
              <Link to="Contact" smooth={true} duration={500}>Contact</Link>
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
  