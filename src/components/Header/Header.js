import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';
function Header() {
  return (
    <div>
      <header className="App-header">
        <nav>
            <ul>
                <img src={logo} alt="logo" className="logo" />
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
  