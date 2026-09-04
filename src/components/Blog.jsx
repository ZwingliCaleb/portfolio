import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Clock, Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Getting Started with Kubernetes: A Beginner\'s Guide',
    description: 'Kubernetes can feel overwhelming at first. In this article, I break down core concepts — pods, services, ingress, and deployments — with real examples to get you up and running fast from my KCNA certification journey.',
    tag: 'Cloud Native',
    link: 'https://medium.com/@calebzwingli/getting-started-with-kubernetes-a-beginners-guide-lessons-from-my-recent-kcna-certification-1921ef5cec95?postPublishedType=repub',
    readTime: '6 min read',
    date: '2024 - 2026',
    color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
  },
  {
    title: 'Why Every Frontend Dev Should Learn Cloud Basics',
    description: 'As a frontend engineer who went through both the AWS CCP and KCNA certifications, I share why understanding cloud primitives makes you a significantly better, more autonomous engineer.',
    tag: 'Career & Architecture',
    link: 'https://medium.com/@calebzwingli',
    readTime: '5 min read',
    date: '2024',
    color: 'border-[#f23f67]/30 text-[#f23f67] bg-[#f23f67]/10'
  },
  {
    title: 'Building a High-Performance Portfolio with Modern React & Tailwind',
    description: 'A step-by-step breakdown of how I engineered this personal developer platform, the design ergonomics choices I made, and the tools that accelerated development.',
    tag: 'React & Web',
    link: 'https://medium.com/@calebzwingli',
    readTime: '4 min read',
    date: '2023 - 2026',
    color: 'border-purple-500/30 text-purple-400 bg-purple-500/10'
  },
];

const Blog = () => {
  return (
    <section id="Blog" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <BookOpen size={13} />
            <span>ENGINEERING INSIGHTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-montserrat text-white tracking-tight">
            From the <span className="text-cyan-400 glow-text-cyan">Blog</span> & Notes
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Thoughts on Kubernetes, multi-cloud platforms, frontend systems, and software engineering principles.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="rounded-3xl glass-panel border border-slate-800 hover:border-cyan-400/40 transition-all duration-200 shadow-glass flex flex-col p-7 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${article.color}`}>
                  {article.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold font-montserrat text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                {article.description}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Calendar size={12} /> {article.date}
                </span>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>Read on Medium</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://medium.com/@calebzwingli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-mono text-xs transition-all hover:scale-105"
          >
            <span>Explore all articles on Medium</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;
