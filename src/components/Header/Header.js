import React from 'react'
import './Header.scss'
import logo from './src/assets/images/header_logo.png'
function Header() {
  return (
    <div>
      <header className="App-header">
        <img src = {logo} alt="Logo" className="App-logo" />
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
  