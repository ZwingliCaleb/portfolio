import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
