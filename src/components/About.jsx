import React from 'react';

const About = () => {
  return (
    <section id="About" className="flex items-center justify-center bg-gray-800 bg-cover bg-center text-white w-full py-16 relative overflow-hidden" style={{ backgroundImage: 'url("../../assets/images/about.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <div className="relative max-w-2xl text-center mx-auto z-10">
        <h2 className='text-4xl md:text-2xl font-bold mb-5'>About Me</h2>
        <p className="text-lg md:text-base leading-relaxed mb-4">
          Hi, I'm <span className="text-sm">Caleb Zwingli</span>, a passionate and detail-oriented software engineer with a focus on frontend development.
          I enjoy creating elegant solutions to complex problems and transforming ideas into intuitive user experiences.
        </p>
        <p className="text-lg md:text-base leading-relaxed mb-4">
          My skills include:
        </p>
        <ul className="list-none p-0">
          <li className="text-base md:text-sm mb-2">React.js</li>
          <li className="text-base md:text-sm mb-2">JavaScript (ES6+)</li>
          <li className="text-base md:text-sm mb-2">HTML5 & CSS3</li>
        </ul>
        <p className="text-lg md:text-base leading-relaxed">
          I am dedicated to staying up-to-date with the latest technologies and continuously refining my skills.
          Whether it's crafting pixel-perfect UIs or optimizing performance, I thrive on delivering high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
