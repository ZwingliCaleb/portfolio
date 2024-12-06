import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ProjectsCarousel = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {projects.map((project, index) => (
            <div key={index} className="embla__slide min-w-full flex-shrink-0 mb-6">
              <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-white">
                {/* Make the image clickable by wrapping it in an <a> tag */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </a>
                <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={scrollPrev}
          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;