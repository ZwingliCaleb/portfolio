import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div className="app-container min-h-screen font-sans">
      <Navbar />
      <HeroSection id="Home" />
      <Stats />
      <About id="About" />
      <Portfolio id="Portfolio" />
      <Blog />
      <Contact id="Contact" />
      <Footer />
    </div>
  );
};

export default App;
