
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Technologies from './Technologies';

const About = () => {
  return (
    <section
      id="About"
      className="flex items-center justify-center bg-gray-800 bg-cover bg-center text-white w-full py-16 relative overflow-hidden min-h-screen"
      style={{ backgroundImage: 'url("../../assets/images/about.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <div className="relative max-w-2xl text-center mx-auto z-10 p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">About Me</h2>
        
        <p className="text-sm md:text-xl leading-relaxed mb-4">
          Hi, I'm <span className="text-xl md:text-2xl font-semibold">Caleb Zwingli</span>, a passionate frontend developer with a strong foundation in Computer Science. 
        </p>

        <p className="text-sm md:text-xl leading-relaxed mb-4">
          I specialize in building intuitive, responsive digital experiences using technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. My goal is to deliver seamless, user-centered interfaces that solve real-world problems.
        </p>

        <p className="text-sm md:text-xl leading-relaxed mb-4">
          I hold a <strong>Bachelor's degree in Computer Science</strong> from St. Paul's University, Kenya, and I’m always eager to learn and expand my knowledge to stay ahead in the fast-evolving tech landscape.
        </p>

        <p className="text-sm md:text-xl leading-relaxed mb-4">
          Constantly refining my skills and staying up-to-date with the latest in web technologies is what drives me. I'm passionate about building the next big thing and creating impactful digital products.
        </p>

        <div>
          <Technologies />
        </div>

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
