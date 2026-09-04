import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Cloud, Activity } from 'lucide-react';

const CountUp = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1400;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const telemetryStats = [
    {
      label: 'Years Engineering Experience',
      value: 3,
      suffix: '+',
      detail: 'Enterprise & startup systems',
      icon: <Layers className="w-5 h-5 text-[#f23f67]" />
    },
    {
      label: 'Verified Cloud Certifications',
      value: 5,
      suffix: '',
      detail: 'KCNA • AWS CCP • OCI • ALX',
      icon: <Award className="w-5 h-5 text-amber-400" />
    },
    {
      label: 'Cloud Environments',
      value: 3,
      suffix: '+',
      detail: 'AWS • Oracle Cloud • K8s',
      icon: <Cloud className="w-5 h-5 text-cyan-400" />
    },
    {
      label: 'System Availability Target',
      value: 99,
      suffix: '.9%',
      detail: 'Resilient cloud infrastructure',
      icon: <Activity className="w-5 h-5 text-emerald-400" />
    },
  ];

  return (
    <section className="w-full bg-space-950/90 border-y border-slate-800/80 py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {telemetryStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-[#f23f67]/40 shadow-glass transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#f23f67]/40 transition-colors">
                  {stat.icon}
                </span>
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  TELEMETRY
                </span>
              </div>
              <div className="text-4xl font-black font-montserrat text-white tracking-tight group-hover:text-[#f23f67] transition-colors">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</h4>
              <p className="text-xs font-mono text-slate-400 mt-1.5">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
