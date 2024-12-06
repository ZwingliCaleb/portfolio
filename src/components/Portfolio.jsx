import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import projects from "./projects";

const Portfolio = () => {
  const handleDownloadResume = () => {
    const resumeFile = "Software_Dev.pdf"; // Ensure the filename matches your actual resume file name
    const resumePath = process.env.PUBLIC_URL + `/${resumeFile}`;

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = resumeFile;
    link.click();
  };

  return (
    <section
      id="Portfolio"
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-blue-950 text-white py-28 md:py-48 min-h-screen md:min-h-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Portfolio</h2>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-0">
        <div className="max-w-sm bg-[#f23f67] text-black rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Skills & Technologies</h3>
          <ul className="text-sm font-montserrat font-semibold">
            <li>React.js</li>
            <li>Next.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li> {/* Added Tailwind CSS */}
            <li>AWS Cloud Practitioner</li> {/* Added AWS CCP */}
            <li>Git & GitHub</li>
            <li>Agile Methodologies</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="max-w-sm bg-[#f23f67] text-black rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Experience</h3>
          <ul className="text-sm font-semibold font-montserrat">
            <li>Software Engineer Apprentice at ALX-Africa</li>
            <li>Software Developer Intern at World Agroforestry</li>
            <li>Tech Support Intern at LBDA</li>
          </ul>
          <button
            className="bg-black text-white text-sm  font-montserrat py-2 px-4 rounded-lg mt-4 hover:bg-gray-900 focus:outline-none"
            onClick={handleDownloadResume}
            aria-label="Download Resume"
          >
            Download resume
          </button>
        </div>

        <div className="max-w-sm bg-[#f23f67] text-black rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Certificates & Badges</h3>
          <ul className="text-sm font-montserrat font-semibold">
            <li>ALX-Africa Software Engineering</li>
            <li>Udacity-Bertelsmann: Agile Software Developer</li>
            <li>AWS Certified Cloud Practitioner</li> {/* Added AWS CCP */}
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
