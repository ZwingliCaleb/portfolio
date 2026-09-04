import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

const BANNER = [
  "┌─────────────────────────────────────────────────────────────┐",
  "│  ZWINGLI-CLI v2026.4 (Cloud Native Workstation)             │",
  "│  Type 'help' to view available system commands.             │",
  "│  Try 'skills', 'projects', 'certs', or 'cat resume.pdf'.     │",
  "└─────────────────────────────────────────────────────────────┘"
];

const TerminalModal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(() => [
    ...BANNER.map(line => ({ type: 'system', text: line }))
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const root = parts[0].toLowerCase();

    const outputLines = [];
    outputLines.push({ type: 'user', text: `guest@zwingli-cloud:~$ ${trimmed}` });

    switch (root) {
      case 'help':
        outputLines.push(
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  help            - List all terminal commands' },
          { type: 'output', text: '  whoami / bio    - Display Caleb Zwingli profile' },
          { type: 'output', text: '  skills          - Inspect Cloud & Full-Stack capabilities' },
          { type: 'output', text: '  projects        - View featured systems and demo links' },
          { type: 'output', text: '  exp             - Display career trajectory and roles' },
          { type: 'output', text: '  certs           - List verified cloud certifications' },
          { type: 'output', text: '  cat resume.pdf  - Download Caleb\'s latest PDF resume' },
          { type: 'output', text: '  contact         - Contact details & social profiles' },
          { type: 'output', text: '  clear           - Clear terminal viewport' },
          { type: 'output', text: '  exit            - Close this terminal session' }
        );
        break;

      case 'whoami':
      case 'bio':
        outputLines.push(
          { type: 'output', text: 'Caleb Zwingli — Software Engineer & Cloud Native Specialist' },
          { type: 'output', text: '• Education: BSc Computer Science (SPU), MSc Computer Science Candidate (MMU)' },
          { type: 'output', text: '• Current Role: Software Developer at Crysoft Solutions' },
          { type: 'output', text: '• Focus: Kubernetes orchestration, cloud infrastructure, modern React & Next.js.' },
          { type: 'output', text: '• Location: Nairobi, Kenya (UTC+3)' }
        );
        break;

      case 'skills':
      case 'stack':
        outputLines.push(
          { type: 'output', text: '--- CLOUD NATIVE & DEVOPS ---' },
          { type: 'output', text: '  Kubernetes (KCNA Certified), Docker, AWS (CCP Certified), Oracle Cloud (OCI)' },
          { type: 'output', text: '--- FRONTEND ARCHITECTURE ---' },
          { type: 'output', text: '  React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion' },
          { type: 'output', text: '--- BACKEND & PLATFORMS ---' },
          { type: 'output', text: '  Python, RESTful APIs, Node.js, PostgreSQL, Git/GitHub, CI/CD' }
        );
        break;

      case 'projects':
        outputLines.push(
          { type: 'output', text: 'Featured Deployments:' },
          { type: 'output', text: '  1. Nike Clone Storefront    -> https://nike-clone-pi-sage.vercel.app/' },
          { type: 'output', text: '  2. Salesman Dashboard       -> https://salesman-dashboard.vercel.app/' },
          { type: 'output', text: '  3. React Hire Talent Board   -> https://reacthire.netlify.app/' },
          { type: 'output', text: '  4. Cloud Portfolio 2026     -> https://calebzwingli.netlify.app/' }
        );
        break;

      case 'exp':
      case 'experience':
        outputLines.push(
          { type: 'output', text: 'Career Timeline:' },
          { type: 'output', text: '  [Feb 2025 - Present] Software Developer at Crysoft Solutions' },
          { type: 'output', text: '  [2024]               Software Engineer Apprentice at ALX-Africa' },
          { type: 'output', text: '  [2023]               Software Developer Intern at World Agroforestry (ICRAF)' },
          { type: 'output', text: '  [2022]               Tech Support Intern at Lake Basin Development Authority' }
        );
        break;

      case 'certs':
      case 'certifications':
        outputLines.push(
          { type: 'output', text: 'Verified Credentials & Badges:' },
          { type: 'output', text: '  ✓ KCNA: Kubernetes and Cloud Native Associate (Linux Foundation / CNCF)' },
          { type: 'output', text: '  ✓ OCI Foundations: Oracle Cloud Infrastructure Associate' },
          { type: 'output', text: '  ✓ AWS Certified: Certified Cloud Practitioner (CCP)' },
          { type: 'output', text: '  ✓ Software Engineering: ALX-Africa' },
          { type: 'output', text: '  ✓ Agile Developer: Udacity-Bertelsmann' }
        );
        break;

      case 'cat':
        if (parts[1] && parts[1].toLowerCase().includes('resume')) {
          outputLines.push(
            { type: 'output', text: 'Downloading Caleb\'s resume (Software_Dev.pdf)...' }
          );
          const link = document.createElement('a');
          link.href = '/Software_Dev.pdf';
          link.download = 'Caleb_Zwingli_Resume.pdf';
          link.click();
        } else {
          outputLines.push({ type: 'error', text: `cat: ${parts[1] || ''}: No such file. Try 'cat resume.pdf'` });
        }
        break;

      case 'contact':
        outputLines.push(
          { type: 'output', text: 'Direct Contact Channels:' },
          { type: 'output', text: '  Email:    calebzwingli@gmail.com' },
          { type: 'output', text: '  Phone:    +254 701 256 649' },
          { type: 'output', text: '  LinkedIn: https://www.linkedin.com/in/caleb-zwingli-566b5320b/' },
          { type: 'output', text: '  GitHub:   https://github.com/ZwingliCaleb' },
          { type: 'output', text: '  Medium:   https://medium.com/@calebzwingli' }
        );
        break;

      case 'sudo':
        outputLines.push(
          { type: 'error', text: "sudo: user 'guest' is not in the sudoers file. This incident will be reported to Caleb." }
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        outputLines.push({
          type: 'error',
          text: `zwingli-sh: command not found: ${trimmed}. Type 'help' for available commands.`
        });
    }

    setHistory(prev => [...prev, ...outputLines]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-2xl h-[480px] rounded-2xl glass-panel border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-space-950/90 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f23f67] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="ml-2 font-mono text-xs text-slate-300 font-semibold flex items-center gap-1.5">
              <Terminal size={14} className="text-[#00f0ff]" />
              guest@zwingli-cloud:~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
              ESC or 'exit' to close
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close terminal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Viewport */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm bg-space-950/95 space-y-1 text-slate-200 cursor-text"
        >
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`leading-relaxed ${
                item.type === 'user'
                  ? 'text-[#00f0ff] font-semibold'
                  : item.type === 'error'
                  ? 'text-[#f23f67]'
                  : item.type === 'system'
                  ? 'text-slate-400 text-xs'
                  : 'text-slate-200'
              }`}
            >
              {item.text}
            </div>
          ))}

          {/* Active input line */}
          <div className="flex items-center gap-2 pt-1 text-[#00f0ff]">
            <span className="font-bold flex-shrink-0">guest@zwingli-cloud:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm caret-[#f23f67]"
              autoFocus
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalModal;
