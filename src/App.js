import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
