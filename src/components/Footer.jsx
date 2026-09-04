import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/images/Logo2.svg';

const Footer = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#07090e] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-8 h-8 filter brightness-125" />
              <span className="font-montserrat font-black text-xl text-white tracking-wider">
                ZWINGLI<span className="text-[#f23f67]">.</span>
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm leading-relaxed">
              Software Engineer specializing in Cloud Native architectures, Kubernetes, and high-performance frontend interfaces.
            </p>
          </div>

          {/* Quick Shortcuts Bar */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#00f0ff]/10 text-slate-300 hover:text-[#00f0ff] border border-slate-800 transition-colors"
            >
              <Terminal size={13} className="text-[#00f0ff]" />
              <span>Press [~] CLI</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/caleb-zwingli-566b5320b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/ZwingliCaleb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="X Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://medium.com/@calebzwingli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; 2026 Caleb Zwingli. All rights reserved.
          </div>
          <div>
            Nairobi, Kenya • Cloud Native & Full-Stack
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
