import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Award, 
  Briefcase, 
  FileDown, 
  Code, 
  Info
} from 'lucide-react';
import projects from './projects';

const PROJECT_CATEGORIES = ['All', 'Full-Stack', 'Cloud & Systems', 'Frontend'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Software_Dev.pdf';
    link.download = 'Caleb_Zwingli_Resume.pdf';
    link.click();
  };

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Crysoft Solutions',
      period: 'Feb 2025 - Present',
      location: 'Nairobi, Kenya',
      description: 'Building full-stack web applications, architecting responsive frontend interfaces, integrating secure RESTful APIs, and deploying cloud services.'
    },
    {
      role: 'Software Engineer Apprentice',
      company: 'ALX-Africa',
      period: '2024',
      location: 'Remote',
      description: 'Rigorous software engineering curriculum covering systems engineering, C/Python, relational databases, distributed systems, and collaborative development.'
    },
    {
      role: 'Software Developer Intern',
      company: 'World Agroforestry (ICRAF)',
      period: '2023',
      location: 'Nairobi, Kenya',
      description: 'Assisted in building internal tools, maintaining data capture portals, and improving web UI components for research workflows.'
    },
    {
      role: 'Tech Support Intern',
      company: 'Lake Basin Development Authority (LBDA)',
      period: '2022',
      location: 'Kisumu, Kenya',
      description: 'Provided network troubleshooting, hardware maintenance, software configuration, and IT infrastructure support.'
    }
  ];

  const certifications = [
    {
      badge: '⛵',
      name: 'KCNA: Kubernetes & Cloud Native Associate',
      issuer: 'Linux Foundation / CNCF',
      date: '2024',
      skills: 'Kubernetes architecture, container orchestration, cloud-native telemetry, CNCF ecosystem'
    },
    {
      badge: '☁️',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: '2023',
      skills: 'Cloud security, VPC, EC2, S3, IAM, serverless deployment architectures'
    },
    {
      badge: '⚡',
      name: 'Oracle Cloud Infrastructure (OCI) Foundations',
      issuer: 'Oracle',
      date: '2024',
      skills: 'OCI compute instances, networking, identity, storage services'
    },
    {
      badge: '🎓',
      name: 'Software Engineering Specialization',
      issuer: 'ALX-Africa',
      date: '2024',
      skills: 'Data structures, algorithms, Linux systems programming, full-stack development'
    },
    {
      badge: '📚',
      name: 'Agile Software Developer',
      issuer: 'Udacity / Bertelsmann',
      date: '2023',
      skills: 'Scrum methodology, sprint planning, continuous delivery'
    }
  ];

  return (
    <section id="Portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#f23f67] mb-3">
            <Layers size={13} />
            <span>DEPLOYMENTS & TRACK RECORD</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-montserrat text-white tracking-tight">
            Featured <span className="text-[#f23f67] glow-text-magenta">Work</span> & Experience
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A showcase of production web applications, cloud architectures, career milestones, and verified credentials.
          </p>
        </div>

        {/* Project Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#f23f67] text-white shadow-glow-magenta'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel border border-slate-800 overflow-hidden group hover:border-[#f23f67]/40 transition-all duration-300 shadow-glass flex flex-col hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent"></div>
                
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-space-950/80 backdrop-blur-md text-[#00f0ff] border border-[#00f0ff]/30">
                    {project.category}
                  </span>
                </div>

                {/* Quick actions top right */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-space-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#f23f67] hover:bg-[#d93358] text-white shadow-glow-magenta transition-transform hover:scale-105"
                    title="Launch Live Application"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-2xl font-bold font-montserrat text-white group-hover:text-[#f23f67] transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Architecture Note */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-300 mb-6 flex items-start gap-2">
                  <Info size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{project.architecture}</span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#f23f67] hover:text-white transition-colors"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={15} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-white underline underline-offset-4"
                  >
                    Inspect Blueprint
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dual Track: Experience & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Experience Track */}
          <div className="lg:col-span-7 rounded-3xl glass-panel border border-slate-800 p-8 sm:p-10 shadow-glass">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#f23f67]">
                  <Briefcase size={20} />
                </span>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white">Experience</h3>
                  <p className="text-xs font-mono text-slate-400">Career Trajectory & Roles</p>
                </div>
              </div>

              <button
                onClick={handleDownloadResume}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-[#f23f67]/15 text-[#f23f67] border border-[#f23f67]/30 font-mono text-xs font-bold transition-all"
              >
                <FileDown size={14} /> Resume (PDF)
              </button>
            </div>

            <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-space-950 border-2 border-[#f23f67] group-hover:bg-[#f23f67] transition-colors"></div>
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-[#f23f67] transition-colors">
                      {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs font-mono text-[#f23f67] bg-[#f23f67]/10 px-2.5 py-0.5 rounded-full border border-[#f23f67]/20">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-xs font-mono text-slate-400 mt-0.5">{exp.location}</p>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 sm:hidden">
              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#f23f67] text-white font-bold text-sm shadow-glow-magenta"
              >
                <FileDown size={16} /> Download Resume
              </button>
            </div>
          </div>

          {/* Certifications Track */}
          <div className="lg:col-span-5 rounded-3xl glass-panel border border-slate-800 p-8 sm:p-10 shadow-glass">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
              <span className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <Award size={20} />
              </span>
              <div>
                <h3 className="text-2xl font-bold font-montserrat text-white">Certifications</h3>
                <p className="text-xs font-mono text-slate-400">Verified Cloud & Engineering Badges</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{cert.badge}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                          {cert.name}
                        </h4>
                        <span className="text-[10px] font-mono text-amber-400/80">{cert.date}</span>
                      </div>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">{cert.issuer}</p>
                      <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                        {cert.skills}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Blueprint Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl rounded-2xl glass-panel border border-[#f23f67]/40 shadow-2xl p-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Code className="text-[#f23f67]" size={18} />
                  <span className="font-mono text-xs text-slate-400">
                    BLUEPRINT: {selectedProject.id}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-4">
                <h3 className="text-2xl font-bold font-montserrat text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300 space-y-1">
                  <div className="text-slate-500 uppercase">Architecture Highlights:</div>
                  <div>{selectedProject.architecture}</div>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-[#f23f67] text-white text-xs font-bold flex items-center gap-1.5 shadow-glow-magenta"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
