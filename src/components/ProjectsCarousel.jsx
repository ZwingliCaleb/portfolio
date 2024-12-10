import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../carousel.css';
import projects from '../components/projects'; // Import the updated projects data

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ProjectsCarousel = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-950 to-grey-900 text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1.3}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 5000 }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-md object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>

                {/* Technologies Section */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs sm:text-sm md:text-base bg-gray-700 rounded-md flex-shrink-0">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm font-bold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsCarousel;
