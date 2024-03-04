import { useRef } from 'react';
import './Navbar.scss';
//import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div>
      <header>
        <h3>Zwingli</h3>
        <nav ref={navRef}>
              <a href="/#">Home</a>
              <a href="/#">About</a>
              <a href="/#">Portfolio</a>
              <a href="/#">Contact</a>
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
  