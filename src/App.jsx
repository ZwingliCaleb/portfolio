import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Stats from './components/Stats';
import About from './components/About';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';

const App = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    // Keyboard shortcut: ` or ~ opens the terminal
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setTerminalOpen((prev) => !prev);
        }
      } else if (e.key === 'Escape') {
        setTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-[#f23f67] selection:text-white">
      {/* High-Performance Pure CSS Ambient Cyber Background (Zero JS / Zero CPU lag) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-25"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#f23f67]/10 via-indigo-600/5 to-transparent blur-[140px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-gradient-to-l from-cyan-500/10 via-transparent to-transparent blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-32 left-10 w-[600px] h-[400px] bg-gradient-to-tr from-purple-600/10 via-transparent to-transparent blur-[130px] rounded-full"></div>
      </div>

      {/* Main Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <Stats />
        <About />
        <Technologies />
        <Portfolio />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Developer CLI Terminal Modal (press ~ to open) */}
      {terminalOpen && (
        <TerminalModal onClose={() => setTerminalOpen(false)} />
      )}
    </div>
  );
};

export default App;
