import { FaReact, FaHtml5, FaGithub, FaCss3Alt, FaAws, FaPython } from 'react-icons/fa'; 
import { IoLogoJavascript } from 'react-icons/io5';
import { SiKubernetes } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6"; // Fallback for Oracle
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const Technologies = () => {
  const techStack = [
    { icon: <FaReact size={40} className="text-[#61DBFB]" />, name: 'React.js' },
    { icon: <IoLogoJavascript size={40} className="text-[#F7DF1E]" />, name: 'JavaScript' },
    { icon: <FaHtml5 size={40} className="text-[#E34F26]" />, name: 'HTML5' },
    { icon: <RiTailwindCssFill size={40} className="text-[#38B2AC]" />, name: 'Tailwind CSS' },
    { icon: <FaGithub size={40} className="text-[#6e5494]" />, name: 'GitHub' },  
    { icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, name: 'CSS3' },
    { icon: <FaAws size={40} className="text-[#FF9900]" />, name: 'AWS' },
    { icon: <RiNextjsFill size={40} className="text-[#ffffff]" />, name: 'Next.js' }, 
    { icon: <SiKubernetes size={40} className="text-[#326CE5]" />, name: 'Kubernetes' },
    { icon: <FaDatabase size={40} className="text-[#F80000]" />, name: 'Oracle Cloud' },
    { icon: <FaPython size={40} className="text-[#3776AB]" />, name: 'Python' },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-6 justify-center items-center">
      {techStack.map((tech, index) => (
        <div 
          key={index} 
          className="relative group flex flex-col items-center justify-center"
          aria-label={tech.name}
        >
          {tech.icon}
          <span className="absolute bottom-full mb-1 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
