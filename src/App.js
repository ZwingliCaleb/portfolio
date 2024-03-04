import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import './App.scss';


const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection id="Home"/>
      <About id="About"/>
      <Portfolio id="Portfolio"/>
      <Contact id="Contact"/>
      <Footer/>
    </div>
  );
}

export default App;
