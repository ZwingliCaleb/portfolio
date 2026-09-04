import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaHtml5, 
  FaGithub, 
  FaCss3Alt, 
  FaAws, 
  FaPython, 
  FaDocker, 
  FaGitAlt 
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiKubernetes, SiTypescript, SiPostgresql } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa6';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { Cpu, Terminal } from 'lucide-react';

const TECHNOLOGIES = [
  // Cloud & DevOps
  { name: 'Kubernetes', category: 'Cloud & DevOps', level: 'KCNA Certified', icon: <SiKubernetes className="text-[#326CE5]" /> },
  { name: 'AWS Cloud', category: 'Cloud & DevOps', level: 'CCP Certified', icon: <FaAws className="text-[#FF9900]" /> },
  { name: 'Oracle Cloud (OCI)', category: 'Cloud & DevOps', level: 'Associate', icon: <FaDatabase className="text-[#F80000]" /> },
  { name: 'Docker', category: 'Cloud & DevOps', level: 'Containers', icon: <FaDocker className="text-[#2496ED]" /> },

  // Frontend
  { name: 'React.js', category: 'Frontend', level: 'Advanced', icon: <FaReact className="text-[#61DBFB]" /> },
  { name: 'Next.js', category: 'Frontend', level: 'Full-Stack SSR', icon: <RiNextjsFill className="text-white" /> },
  { name: 'TypeScript', category: 'Frontend', level: 'Typed JS', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Utility CSS', icon: <RiTailwindCssFill className="text-[#38B2AC]" /> },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Core Web', icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Semantic UI', icon: <FaHtml5 className="text-[#E34F26]" /> },

  // Backend & Systems
  { name: 'Python', category: 'Backend & Data', level: 'Backend & Scripting', icon: <FaPython className="text-[#3776AB]" /> },
  { name: 'PostgreSQL', category: 'Backend & Data', level: 'Relational DB', icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: 'RESTful APIs', category: 'Backend & Data', level: 'Microservices', icon: <Cpu className="text-emerald-400" /> },

  // Tools & Workflow
  { name: 'Git & GitHub', category: 'Tools & Workflow', level: 'Version Control', icon: <FaGithub className="text-slate-300" /> },
  { name: 'CI/CD & DevOps', category: 'Tools & Workflow', level: 'Automation', icon: <Terminal className="text-[#00f0ff]" /> },
];

const CATEGORIES = ['All', 'Cloud & DevOps', 'Frontend', 'Backend & Data', 'Tools & Workflow'];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(t => t.category === activeCategory);

  return (
    <section id="Skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#00f0ff] mb-3">
            <Cpu size={13} />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-montserrat text-white tracking-tight">
            Tools & <span className="text-[#00f0ff] glow-text-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Production-tested stack spanning cloud-native infrastructure, modern frontend engineering, and backend services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#00f0ff] text-slate-950 shadow-glow-cyan'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-[#00f0ff]/50 hover:shadow-glow-cyan transition-all duration-200 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1"
            >
              <div className="w-13 h-13 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-3xl mb-3 group-hover:scale-105 transition-transform">
                {tech.icon}
              </div>
              <h4 className="font-bold text-white text-sm font-montserrat group-hover:text-[#00f0ff] transition-colors">
                {tech.name}
              </h4>
              <span className="text-[11px] font-mono text-slate-400 mt-1">
                {tech.level}
              </span>
              <span className="text-[9px] font-mono text-[#00f0ff]/80 uppercase tracking-widest mt-2 px-2 py-0.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                {tech.category}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Technologies;
