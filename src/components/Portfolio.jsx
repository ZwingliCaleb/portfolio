import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
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
    <section id="Portfolio" className="bg-gradient-to-b from-gray-950 via-blue-950 to-gray-900 text-white py-20 sm:py-28 md:py-32 min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center">Portfolio</h2>

      <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-0">
        {/* Experience Card */}
        <Card radius="lg" className="rounded-2xl max-w-sm bg-gray-900 border border-[#f23f67]/30 text-white shadow-[0_0_15px_rgba(242,63,103,0.15)] hover:shadow-[0_0_25px_rgba(242,63,103,0.3)] transition-shadow duration-300">
          <CardHeader className="flex gap-3 justify-center pb-0 pt-6">
            <h3 className="text-2xl font-bold text-[#f23f67]">Experience</h3>
          </CardHeader>
          <CardBody className="py-6 pt-4">
            <ul className="text-sm font-semibold font-montserrat space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 text-[#f23f67] text-lg">🏢</span>
                <span>Software Developer at Crysoft Solutions <span className="block text-xs font-normal text-gray-500 mt-1">(Feb 2025 - Present)</span></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#f23f67] text-lg">📈</span> 
                <span>Software Engineer Apprentice at ALX-Africa <span className="block text-xs font-normal text-gray-500 mt-1">(2024)</span></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#f23f67] text-lg">🌍</span> 
                <span>Software Developer Intern at World Agroforestry <span className="block text-xs font-normal text-gray-500 mt-1">(2023)</span></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#f23f67] text-lg">💻</span> 
                <span>Tech Support Intern at LBDA <span className="block text-xs font-normal text-gray-500 mt-1">(2022)</span></span>
              </li>
            </ul>
            <Button
              className="bg-[#f23f67] text-white font-bold w-full mt-6 shadow-md hover:-translate-y-1 transition-transform"
              radius="full"
              onPress={handleDownloadResume}
            >
              Download Resume
            </Button>
          </CardBody>
        </Card>

        {/* Certifications & Badges Card */}
        <Card radius="lg" className="rounded-2xl max-w-sm bg-gray-900 border border-[#f23f67]/30 text-white shadow-[0_0_15px_rgba(242,63,103,0.15)] hover:shadow-[0_0_25px_rgba(242,63,103,0.3)] transition-shadow duration-300">
          <CardHeader className="flex gap-3 justify-center pb-0 pt-6">
            <h3 className="text-2xl font-bold text-[#f23f67]">Certifications</h3>
          </CardHeader>
          <CardBody className="py-6 pt-4">
            <ul className="text-sm font-semibold font-montserrat space-y-4 text-gray-300">
              <li className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <span className="mr-3 text-[#f23f67] text-xl">⛵</span> 
                <span>KCNA <span className="block text-xs font-normal text-gray-400">Kubernetes and Cloud Native Associate</span></span>
              </li>
              <li className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <span className="mr-3 text-[#f23f67] text-xl">☁️</span> 
                <span>OCI Foundations <span className="block text-xs font-normal text-gray-400">Oracle Cloud Infrastructure</span></span>
              </li>
              <li className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <span className="mr-3 text-[#f23f67] text-xl">🎓</span> 
                <span>Software Engineering <span className="block text-xs font-normal text-gray-400">ALX-Africa (2024)</span></span>
              </li>
              <li className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <span className="mr-3 text-[#f23f67] text-xl">📚</span> 
                <span>Agile Software Developer <span className="block text-xs font-normal text-gray-400">Udacity-Bertelsmann (2023)</span></span>
              </li>
              <li className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <span className="mr-3 text-[#f23f67] text-xl">☁️</span> 
                <span>Certified Cloud Practitioner <span className="block text-xs font-normal text-gray-400">AWS (2023)</span></span>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>

      <div className="mt-20">
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
