import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative font-montserrat bg-gradient-to-b from-gray-950 to-blue-950 text-[#f23f67] py-30 px-10 text-left min-h-[740px] md:min-h-screen flex items-center md:px-5" id="Home">
      <motion.div 
        className="max-w-[800px] mx-auto ml-1 md:ml-20 pt-20 flex-col flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-bold md:text-3xl">Hello,</motion.h3>
        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold my-4 md:my-8 text-white drop-shadow-[0_0_15px_rgba(242,63,103,0.5)]">
          I AM <span className="text-[#f23f67]">ZWINGLI.</span>
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-2xl font-bold md:text-4xl mb-6 text-gray-300">Software Engineer | Cloud Native & AWS Certified</motion.h2>
        <motion.h3 variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-light mb-10">Bit by bit, byte by byte: Crafting digital masterpieces.</motion.h3>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Link to="Portfolio" smooth duration={600}>
            <button className="bg-[#f23f67] hover:bg-[#d93358] text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-[#f23f67]/30 hover:-translate-y-1 transition-all duration-300 text-lg w-full sm:w-auto">
              View My Work
            </button>
          </Link>
          <Link to="Contact" smooth duration={600}>
            <button className="border border-[#f23f67] text-[#f23f67] hover:bg-[#f23f67]/10 font-bold px-8 py-3 rounded-full hover:-translate-y-1 transition-all duration-300 text-lg w-full sm:w-auto">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
