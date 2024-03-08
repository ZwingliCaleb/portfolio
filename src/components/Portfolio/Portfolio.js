// Portfolio.js

import React from 'react';
import './Portfolio.scss'; // Import your styles

const Portfolio = () => {
  const handleDownloadResume = () => {
    const resumeFile = 'Resume.pdf';
    const resumePath = process.env.PUBLIC_URL + `/${resumeFile}`;

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = resumeFile;
    link.click();
  };

  return (
    <section id="Portfolio" className="portfolio-container">
      <h2 className="portfolio-header">Portfolio</h2>  

     <div className="portfolio-sections">
     <div className="portfolio-section">
        <h3>Skills & Technologies</h3>
        <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
            <li>Agile Methodologies</li>
            <li>Responsive Web Design</li>
        </ul>
      </div>

      <div className="portfolio-section">
        <h3>Experience</h3>
        <ul>
            <li>Software Engineer Apprrentice at ALX-Africa</li>
            <li>Software Developer Intern at World Agroforestry</li>
            <li>Tech Support Intern at LBDA</li>
        </ul>
        <button className="button" onClick={handleDownloadResume}>Download Resume</button>
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
