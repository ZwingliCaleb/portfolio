import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="About"
      className="flex items-center justify-center bg-gray-800 bg-cover bg-center text-white w-full py-16 relative overflow-hidden min-h-screen "
      style={{ backgroundImage: 'url("../../assets/images/about.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <div className="relative max-w-2xl text-center mx-auto z-10 p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">About Me</h2>
        <p className="text-sm md:text-xl leading-relaxed mb-4">
          Hi, I'm <span className="text-xl md:text-2xl font-semibold">Caleb Zwingli</span>, a passionate and detail-oriented software engineer with a focus on frontend development.
          I enjoy creating elegant solutions to complex problems and transforming ideas into intuitive user experiences.
        </p>
        <p className="text-sm md:text-xl leading-relaxed mb-4">
          Recently, I earned my <span className="font-semibold">AWS Certified Cloud Practitioner (CCP)</span> certification, further enhancing my understanding of cloud services and solutions.
        </p>
        <p className="text-md md:text-lg leading-relaxed mb-4">
          My skills include:
        </p>
        <ul className="list-none p-0 text-left inline-block">
          <li className="text-base md:text-lg mb-2 flex items-center">
            <span className="mr-2 text-[#f23f67]">•</span>React.js
          </li>
          <li className="text-base md:text-lg mb-2 flex items-center">
            <span className="mr-2 text-[#f23f67]">•</span>JavaScript (ES6+)
          </li>
          <li className="text-base md:text-lg mb-2 flex items-center">
            <span className="mr-2 text-[#f23f67]">•</span>HTML5 & CSS3
          </li>
          <li className="text-base md:text-lg mb-2 flex items-center">
            <span className="mr-2 text-[#f23f67]">•</span>Tailwind CSS {/* Added Tailwind CSS */}
          </li>
          <li className="text-base md:text-lg mb-2 flex items-center">
            <span className="mr-2 text-[#f23f67]">•</span>AWS Cloud Practitioner {/* Added AWS CCP */}
          </li>
          <li className="text-base md:text-lg mb-2 flex items-center">
            <span className="mr-2 text-[#f23f67]">•</span>Git & GitHub
          </li>
          <li className="text-base md:text-lg mb-2 flex items-center">
            <span className="mr-2 text-[#f23f67]">•</span>Responsive Web Design
          </li>
        </ul>
        <p className="text-sm md:text-xl leading-relaxed mt-4">
          I am dedicated to staying up-to-date with the latest technologies and continuously refining my skills.
          Whether it's crafting pixel-perfect UIs or optimizing performance, I thrive on delivering high-quality solutions.
        </p>
        <div className="mt-8">
          <p className="text-sm md:text-xl mb-2 flex items-center justify-center">
            <FaEnvelope className="mr-2 text-[#f23f67] hover:text-[#fc8da2] transition-colors duration-300" />
            <span className="font-bold">Email:</span> 
            <a href="mailto:calebzwingli@gmail.com" className="ml-2 text-[#f23f67] hover:underline">calebzwingli@gmail.com</a>
          </p>
          <p className="text-sm md:text-xl flex items-center justify-center">
            <FaPhone className="mr-2 text-[#f23f67] hover:text-[#fc8da2] transition-colors duration-300" />
            <span className="font-bold">Phone:</span> 
            <a href="tel:+254701256649" className="ml-2 text-[#f23f67] hover:underline">+254701256649</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
