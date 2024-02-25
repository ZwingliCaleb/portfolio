import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section id="About" className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Caleb Zwingli, a passionate and detail-oriented software engineer with a focus on frontend development.
          I enjoy creating elegant solutions to complex problems and transforming ideas into intuitive user experiences.
        </p>
        <p>
          My skills include:
        </p>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
        </ul>
        <p>
          I am dedicated to staying up-to-date with the latest technologies and continuously refining my skills.
          Whether it's crafting pixel-perfect UIs or optimizing performance, I thrive on delivering high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
