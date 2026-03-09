import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Chip } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../carousel.css';
import projects from '../components/projects'; // Import the updated projects data

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ProjectsCarousel = () => {
  return (
    <section className="w-full py-16 text-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4 text-lg">Some of the recent work I've built</p>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.5, spaceBetween: 40 },
        }}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="pb-12 px-4"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="pt-4 pb-8 h-auto flex">
            <Card radius="lg" className="rounded-2xl h-full w-full bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-[#f23f67]/50 shadow-xl hover:shadow-[0_0_30px_rgba(242,63,103,0.15)] transition-all duration-300 group">
              <CardHeader className="p-0 overflow-hidden relative h-64">
                <Image
                  removeWrapper
                  alt={project.title}
                  className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={project.image}
                  radius="none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
              </CardHeader>
              <CardBody className="px-6 py-5 flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#f23f67] transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <Chip 
                      key={i} 
                      size="sm" 
                      variant="flat" 
                      className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-[#f23f67]/20 hover:text-[#f23f67] transition-colors"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </CardBody>
              <CardFooter className="px-6 py-4 pt-0 border-t border-gray-800/50 mt-auto">
                <Button 
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#f23f67]/10 text-[#f23f67] border border-[#f23f67]/30 group-hover:bg-[#f23f67] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(242,63,103,0.4)] transition-all font-semibold"
                  radius="full"
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsCarousel;
