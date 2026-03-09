import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CountUp = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Projects Shipped', value: 4, suffix: '+' },
    { label: 'Certifications', value: 5, suffix: '' },
    { label: 'Cloud Platforms', value: 2, suffix: '' },
  ];

  return (
    <section className="w-full bg-gray-950/80 border-y border-gray-800 py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-[#f23f67] font-montserrat">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-400 text-sm mt-2 font-semibold tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
