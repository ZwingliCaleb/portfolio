import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import ContactForm from './ContactForm';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('calebzwingli@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      url: 'https://www.linkedin.com/in/caleb-zwingli-566b5320b/',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/50'
    },
    {
      name: 'GitHub',
      icon: <FontAwesomeIcon icon={faGithub} />,
      url: 'https://github.com/ZwingliCaleb',
      color: 'hover:text-white hover:border-white/50'
    },
    {
      name: 'X (Twitter)',
      icon: <FontAwesomeIcon icon={faXTwitter} />,
      url: 'https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09',
      color: 'hover:text-white hover:border-white/50'
    },
    {
      name: 'Medium',
      icon: <FontAwesomeIcon icon={faMedium} />,
      url: 'https://medium.com/@calebzwingli',
      color: 'hover:text-emerald-400 hover:border-emerald-400/50'
    },
  ];

  return (
    <section id="Contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#f23f67] mb-3">
            <Sparkles size={13} />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-montserrat text-white tracking-tight">
            Initiate <span className="text-[#f23f67] glow-text-magenta">Contact</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Have a project, open position, cloud challenge, or just want to connect? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Card */}
            <div className="p-8 rounded-3xl glass-panel border border-slate-800 shadow-glass space-y-6">
              <h3 className="text-2xl font-bold font-montserrat text-white">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am currently open to software engineering roles, cloud native contracts, and technical consulting.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="p-2 rounded-xl bg-slate-800 text-[#f23f67] flex-shrink-0">
                    <Mail size={18} />
                  </span>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <a
                      href="mailto:calebzwingli@gmail.com"
                      className="text-sm font-mono text-white hover:text-[#f23f67] transition-colors truncate block"
                    >
                      calebzwingli@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-slate-800 text-cyan-400 flex-shrink-0">
                    <Phone size={18} />
                  </span>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Voice / WhatsApp</div>
                    <a
                      href="tel:+254701256649"
                      className="text-sm font-mono text-white hover:text-cyan-400 transition-colors"
                    >
                      +254 701 256 649
                    </a>
                  </div>
                </div>
              </div>

              {/* Response SLA badge */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Clock size={14} className="text-emerald-400" />
                <span>Typical response time: &lt; 24 hours</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-6 rounded-3xl glass-panel border border-slate-800 shadow-glass">
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider">
                Digital Presence & Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 text-slate-300 text-sm font-semibold transition-all group ${social.color}`}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="flex-1 text-xs font-mono">{social.name}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 shadow-glass">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-montserrat text-white">
                Send a Message
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Drop your note below and it will be delivered directly to Caleb.
              </p>
            </div>
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
