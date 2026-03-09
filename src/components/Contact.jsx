import React from "react";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-blue-950 text-white w-full py-16 sm:py-20 overflow-hidden" id="Contact">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="w-full max-w-screen-lg px-4 sm:px-6"
      >
        <motion.h1 variants={scrollVariants} className="text-4xl sm:text-5xl font-bold mt-8 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
          Get in touch!
        </motion.h1>
        <motion.p variants={scrollVariants} className="text-center text-gray-400 mb-12 text-lg">Let's build something amazing together.</motion.p>
        
        <div className="flex flex-col lg:flex-row justify-center items-stretch w-full gap-8 lg:gap-12">
          {/* Social Platforms Card */}
          <motion.div variants={scrollVariants} className="w-full lg:w-5/12 flex">
            <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 w-full flex flex-col justify-center text-center lg:text-left hover:border-[#f23f67]/30 transition-colors duration-300">
              <h2 className="text-2xl font-bold font-montserrat mb-6 text-white">Connect with me</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, feel free to drop a message or connect with me via social media!
              </p>
              <div className="flex justify-center lg:justify-start gap-6 text-3xl">
                <a
                  href="https://www.linkedin.com/in/caleb-zwingli-566b5320b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/ZwingliCaleb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1DA1F2] hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://medium.com/@calebzwingli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faMedium} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex flex-col justify-center items-center opacity-50">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Contact Form Card */}
          <motion.div variants={scrollVariants} className="w-full lg:w-7/12 flex">
            <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl p-8 w-full hover:border-[#f23f67]/30 transition-colors duration-300">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
