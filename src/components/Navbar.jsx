import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Terminal, FileDown } from 'lucide-react';
import Logo from '../assets/images/Logo2.svg';

const Navbar = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'Home' },
    { label: 'About', to: 'About' },
    { label: 'Skills', to: 'Skills' },
    { label: 'Portfolio', to: 'Portfolio' },
    { label: 'Blog', to: 'Blog' },
    { label: 'Contact', to: 'Contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Software_Dev.pdf';
    link.download = 'Caleb_Zwingli_Resume.pdf';
    link.click();
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-[#07090e]/70 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Availability Pill */}
        <div className="flex items-center gap-4">
          <Link
            to="Home"
            smooth
            duration={500}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <img
              src={Logo}
              alt="Caleb Zwingli logo"
              className="w-9 h-9 transition-transform duration-300 group-hover:scale-105 filter brightness-125 drop-shadow-[0_0_8px_rgba(242,63,103,0.4)]"
            />
            <span className="font-montserrat font-black text-xl tracking-wider text-white group-hover:text-[#f23f67] transition-colors">
              ZWINGLI<span className="text-[#f23f67]">.</span>
            </span>
          </Link>

          {/* Clean availability pill */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for hire</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              spy={true}
              activeClass="text-[#f23f67] font-bold"
              className="text-sm font-semibold text-slate-300 hover:text-white cursor-pointer transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Quick Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 hover:border-[#00f0ff] font-mono text-xs transition-all"
            title="Open Developer Terminal (~)"
          >
            <Terminal size={14} />
            <span>CLI</span>
          </button>

          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f23f67] hover:bg-[#d93358] text-white font-semibold text-xs shadow-glow-magenta hover:-translate-y-0.5 transition-all"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 border-b border-slate-800 px-6 py-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                className="text-lg font-bold text-slate-200 hover:text-[#f23f67] cursor-pointer py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-[#00f0ff] border border-[#00f0ff]/30 text-xs font-mono"
            >
              <Terminal size={14} /> Launch Terminal (CLI)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadResume();
              }}
              className="w-full py-2.5 rounded-xl bg-[#f23f67] text-white font-bold text-center text-sm shadow-glow-magenta"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
