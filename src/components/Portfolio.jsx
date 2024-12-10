import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import projects from "./projects";

const Portfolio = () => {
  const handleDownloadResume = () => {
    const resumeFile = "Software_Dev.pdf";
    const resumePath = process.env.PUBLIC_URL + `/${resumeFile}`;

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = resumeFile;
    link.click();
  };

  return (
    <section id="Portfolio" className="bg-gradient-to-b from-gray-950 via-blue-950 to-gray-900 text-white py-28 md:py-48 min-h-screen md:min-h-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Portfolio</h2>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-0">
        {/* Experience Card */}
        <div className="max-w-sm bg-[#f23f67] text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">Experience</h3>
          <ul className="text-sm font-semibold font-montserrat space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-[#f23f67]">📈</span> Software Engineer Apprentice at ALX-Africa (2024 - Present)
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#f23f67]">🌍</span> Software Developer Intern at World Agroforestry (2023)
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#f23f67]">💻</span> Tech Support Intern at LBDA (2022)
            </li>
          </ul>
          <button
            className="bg-black text-white text-sm font-montserrat py-2 px-4 rounded-lg mt-4 hover:bg-gray-900 focus:outline-none"
            onClick={handleDownloadResume}
            aria-label="Download Resume"
          >
            Download Resume
          </button>
        </div>

        {/* Certifications & Badges Card */}
        <div className="max-w-sm bg-[#f23f67] text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">Certifications & Badges</h3>
          <ul className="text-sm font-semibold font-montserrat space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-[#f23f67]">🎓</span> ALX-Africa Software Engineering (2024)
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#f23f67]">📚</span> Udacity-Bertelsmann: Agile Software Developer (2023)
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#f23f67]">☁️</span> AWS Certified Cloud Practitioner (2023)
            </li>
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
