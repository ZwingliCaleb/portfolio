import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Terminal, ArrowUpRight, ShieldCheck, Cpu, Code2 } from 'lucide-react';

const ROLES = [
  'Software Engineer',
  'Cloud Native & K8s Specialist',
  'Full-Stack React & Next.js Architect',
  'MSc Computer Science Candidate'
];

const HeroSection = ({ onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayedText(
          currentRole.substring(0, displayedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="Home"
      className="relative min-h-[88vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold tracking-wide uppercase">
              Cloud Native & Software Engineering
            </span>
          </div>

          <h2 className="text-slate-400 text-lg sm:text-xl font-mono">
            Hello world, I'm
          </h2>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-montserrat font-black text-white tracking-tight mt-1 mb-4">
            CALEB <span className="text-[#f23f67] glow-text-magenta">ZWINGLI</span>
          </h1>

          {/* Dynamic Typing Title */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-cyan-300 flex items-center">
              <span>{displayedText}</span>
              <span className="inline-block w-2 h-6 bg-[#f23f67] ml-1 animate-pulse"></span>
            </h3>
          </div>

          {/* Pitch */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
            Bit by bit, byte by byte: Crafting high-performance digital products, resilient cloud infrastructure, and intuitive web experiences from Nairobi, Kenya.
          </p>

          {/* Verified Cloud Credential Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-xs">
              <ShieldCheck size={14} className="text-blue-400" /> KCNA Certified
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-300 font-mono text-xs">
              <ShieldCheck size={14} className="text-amber-400" /> AWS CCP Certified
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-950/60 border border-red-500/30 text-red-300 font-mono text-xs">
              <ShieldCheck size={14} className="text-red-400" /> OCI Foundations
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono text-xs">
              <Cpu size={14} className="text-purple-400" /> MSc CS Candidate
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link to="Portfolio" smooth duration={600} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f23f67] hover:bg-[#d93358] text-white font-bold text-sm shadow-glow-magenta hover:-translate-y-0.5 transition-all">
                <span>View My Work</span>
                <ArrowUpRight size={18} />
              </button>
            </Link>

            <button
              onClick={onOpenTerminal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/90 hover:bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/40 hover:border-[#00f0ff] font-mono text-sm hover:-translate-y-0.5 transition-all"
            >
              <Terminal size={16} />
              <span>Launch Terminal (CLI)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Workstation Card */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <div className="w-full max-w-md rounded-2xl glass-panel border border-slate-800 p-6 shadow-2xl relative overflow-hidden group hover:border-[#f23f67]/40 transition-all duration-300">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f23f67]"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                <Code2 size={13} className="text-cyan-400" /> zwingli-cloud.json
              </span>
            </div>

            <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto selection:bg-slate-700">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-300">engineer</span> = &#123;{"\n"}
                {"  "}name: <span className="text-emerald-300">"Caleb Zwingli"</span>,{"\n"}
                {"  "}company: <span className="text-emerald-300">"Crysoft Solutions"</span>,{"\n"}
                {"  "}location: <span className="text-emerald-300">"Nairobi, Kenya"</span>,{"\n"}
                {"  "}degree: <span className="text-emerald-300">"BSc Computer Science"</span>,{"\n"}
                {"  "}masters: <span className="text-cyan-300">"MSc Candidate (MMU)"</span>,{"\n"}
                {"  "}certifications: [
                {"\n"}
                {"    "}<span className="text-blue-300">"KCNA (Kubernetes)"</span>,{"\n"}
                {"    "}<span className="text-amber-300">"AWS CCP Certified"</span>,{"\n"}
                {"    "}<span className="text-red-300">"OCI Foundations"</span>{"\n"}
                {"  "}],{"\n"}
                {"  "}status: <span className="text-[#00f0ff] font-bold">"AVAILABLE_FOR_HIRE"</span>{"\n"}
                &#125;;
              </code>
            </pre>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                SLA: 99.99% Uptime
              </span>
              <button
                onClick={onOpenTerminal}
                className="text-[#f23f67] hover:text-[#ff6b8b] flex items-center gap-1 transition-colors"
              >
                <span>Run CLI</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
