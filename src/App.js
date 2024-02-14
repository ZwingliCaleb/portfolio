import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
