import { useRef } from 'react';
import './Navbar.scss';
import { smoothScroll } from '../../utils/scrollUtils';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/logo.svg';
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleScroll = (targetId) => {
    smoothScroll(targetId);
    showNavbar();
  };

  return (
    <div>
      <header>
        <img src={Logo} alt="Logo" className="logo" />
        <nav ref={navRef}>
              <a href="/#" onClick={() => handleScroll('Home')}>Home</a>
              <a href="/#" onClick={() => handleScroll('About')}>About</a>
              <a href="/#" onClick={() => handleScroll('Portfolio')}>Portfolio</a>
              <a href="/#" onClick={() => handleScroll('Contact')}>Contact</a>
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
  