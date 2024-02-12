// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/portfolio" render={() => <Portfolio/>} />
            <Route path="/contact" render={() => <Contact/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
