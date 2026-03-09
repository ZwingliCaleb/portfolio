import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.h2 variants={itemVariants} className="text-2xl font-bold md:text-4xl mb-6 text-gray-300">Software Engineer | AWS Certified Cloud Practitioner</motion.h2>
        <motion.h3 variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-light">Bit by bit, byte by byte: Crafting digital masterpieces.</motion.h3>
      </motion.div>
    </section>
  );
};

export default HeroSection;
