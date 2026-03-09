import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Technologies from './Technologies';
import { motion } from 'framer-motion';

const About = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section
      id="About"
      className="flex items-center justify-center bg-gray-800 bg-cover bg-center text-white w-full py-16 relative overflow-hidden min-h-screen"
      style={{ backgroundImage: 'url("../../assets/images/about.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <motion.div 
        className="relative max-w-2xl text-center mx-auto z-10 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2 variants={scrollVariants} className="text-3xl md:text-4xl font-bold mb-5 text-[#f23f67]">About Me</motion.h2>
        
        <motion.p variants={scrollVariants} className="text-sm md:text-xl leading-relaxed mb-4 text-gray-300">
          Hi, I'm <span className="text-xl md:text-2xl font-semibold text-white">Caleb Zwingli</span>, a passionate frontend developer with a strong foundation in Computer Science. 
        </motion.p>

        <motion.p variants={scrollVariants} className="text-sm md:text-xl leading-relaxed mb-4 text-gray-300">
          I specialize in building intuitive, responsive digital experiences using technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. My goal is to deliver seamless, user-centered interfaces that solve real-world problems.
        </motion.p>

        <motion.p variants={scrollVariants} className="text-sm md:text-xl leading-relaxed mb-4 text-gray-300">
          I hold a <strong>Bachelor's degree in Computer Science</strong> from St. Paul's University, Kenya, and I’m always eager to learn and expand my knowledge to stay ahead in the fast-evolving tech landscape.
        </motion.p>

        <motion.p variants={scrollVariants} className="text-sm md:text-xl leading-relaxed mb-8 text-gray-300">
          Constantly refining my skills and staying up-to-date with the latest in web technologies is what drives me. I'm passionate about building the next big thing and creating impactful digital products.
        </motion.p>

        <motion.div variants={scrollVariants} className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-800 shadow-xl">
          <Technologies />
        </motion.div>

        <motion.div variants={scrollVariants} className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:calebzwingli@gmail.com" className="flex items-center justify-center bg-gray-900/80 hover:bg-[#f23f67]/20 border border-gray-700 hover:border-[#f23f67] px-6 py-3 rounded-full transition-all duration-300 group">
            <FaEnvelope className="mr-3 text-[#f23f67] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-300 group-hover:text-white">calebzwingli@gmail.com</span>
          </a>
          <a href="tel:+254701256649" className="flex items-center justify-center bg-gray-900/80 hover:bg-[#f23f67]/20 border border-gray-700 hover:border-[#f23f67] px-6 py-3 rounded-full transition-all duration-300 group">
            <FaPhone className="mr-3 text-[#f23f67] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-300 group-hover:text-white">+254701256649</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
