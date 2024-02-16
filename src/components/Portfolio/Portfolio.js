// Portfolio.js

import React from 'react';
import './Portfolio.scss'; // Import your styles

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-container">
      <h2 className="portfolio-header">Portfolio</h2>  

     <div className="portfolio-sections">
     <div className="portfolio-section">
        <h3>Skills & Technologies</h3>
        <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Agile Methodologies</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
            <li>Testing & Debugging</li>
        </ul>
      </div>

      <div className="portfolio-section">
        <h3>Experience</h3>
        <ul>
            <li>Software Engineer Apprrentice at ALX-Africa</li>
            <li>Software Developer Intern at World Agroforestry</li>
            <li>Tech Support Intern at LBDA</li>
        </ul>
        <button className="button">Download Resume</button>
      </div>

      <div className="portfolio-section">
        <h3>Certificates & Badges</h3>
        <ul>
            <li>ALX-Africa Software Engineering</li>
            <li>Udacity-Bertelsmann: Agile Software Developer</li>
        </ul>
      </div>
     </div>
    </section>
  );
};

export default Portfolio;
