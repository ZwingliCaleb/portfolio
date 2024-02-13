import React from 'react'
import './Header.scss'
function Header() {
  return (
    <div>
      <header className="App-header">
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
  