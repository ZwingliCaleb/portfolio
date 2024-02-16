// About.js

import React from 'react';
import './About.scss'; // Import your styles

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Caleb Zwingli, a passionate and detail-oriented software engineer with a focus on frontend development.
          I enjoy creating elegant solutions to complex problems and transforming ideas into intuitive user experiences.
        </p>
        <p>
          My skills include:
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            {/* Add more skills as needed */}
          </ul>
        </p>
        <p>
          I am dedicated to staying up-to-date with the latest technologies and continuously refining my skills.
          Whether it's crafting pixel-perfect UIs or optimizing performance, I thrive on delivering high-quality solutions.
        </p>
        {/* Add more personal details, projects, or experiences as needed */}
      </div>
    </section>
  );
};

export default About;
