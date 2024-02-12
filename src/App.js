import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App-container">
      <Header/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
