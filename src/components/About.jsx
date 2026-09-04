import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Server, Layout, Sparkles } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: 'Cloud Native & Orchestration',
      description: 'Architecting resilient workloads with Kubernetes (KCNA), Docker containers, and multi-cloud environments across AWS and Oracle Cloud.'
    },
    {
      icon: <Layout className="w-6 h-6 text-[#f23f67]" />,
      title: 'Modern Frontend Engineering',
      description: 'Building blazing-fast web applications with React 18, Next.js, Tailwind CSS, TypeScript, and fluid micro-interactions.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: 'Computer Science Research',
      description: 'Pursuing a Master\'s in Computer Science at Multimedia University of Kenya, diving into distributed computing, scalability, and cloud architecture.'
    }
  ];

  return (
    <section id="About" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#f23f67] mb-3">
            <Sparkles size={13} />
            <span>ENGINEERING PROFILE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-montserrat text-white tracking-tight">
            About <span className="text-[#f23f67]">Caleb Zwingli</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
            Software engineer passionate about the intersection of high-performance frontend interfaces and rock-solid cloud infrastructure.
          </p>
        </div>

        {/* Two-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative Glass Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 shadow-glass space-y-5 leading-relaxed text-slate-300 text-base">
            <h3 className="text-2xl font-bold font-montserrat text-white">
              Designing scalable solutions with passion & precision
            </h3>

            <p>
              I hold a <strong>Bachelor of Science in Computer Science</strong> from <span className="text-white font-semibold">St. Paul's University</span> and am currently advancing my knowledge through a <strong className="text-cyan-400">Master of Science in Computer Science</strong> at <span className="text-white font-semibold">Multimedia University of Kenya</span>.
            </p>

            <p>
              As a Software Developer at <strong className="text-white">Crysoft Solutions</strong>, I build intuitive client applications, optimize API performance, and deploy scalable cloud workloads. My background also includes intensive software engineering training at <strong>ALX-Africa</strong> and engineering internships at the <strong>World Agroforestry Centre (ICRAF)</strong>.
            </p>

            <p>
              Whether orchestrating container pods with <strong>Kubernetes</strong>, deploying serverless APIs on <strong>AWS</strong>, or crafting delightful UI states with <strong>React</strong>, I approach every challenge with curiosity, clean architecture principles, and a relentless focus on user experience.
            </p>

            {/* Quick Contact & Details Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#f23f67]" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-cyan-400" />
                <span>Crysoft Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-purple-400" />
                <span>MSc Candidate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-200 group hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#f23f67]/30 transition-colors flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-montserrat text-white group-hover:text-[#f23f67] transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
