import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      liveLink: t('projects.project1.liveLink'),
      codeLink: '#'
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project3.description'),
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: t('projects.project5.title'),
      description: t('projects.project3.description'),
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
      liveLink: '#',
      codeLink: '#'
    }
  
  ];

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="projects" className="py-20 bg-dark-gray relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title after:content-[''] after:block after:w-24 after:h-1 after:bg-neon-green after:mx-auto after:mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {t('projects.title')}
          </motion.h2>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-neon-green/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                <p className="text-gray-300 mb-4">{projects[currentIndex].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-light-gray rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={projects[currentIndex].liveLink} 
                    className="flex items-center gap-1 text-neon-green hover:underline hover-effect"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    {t('projects.viewProject')}
                  </a>
                  <a 
                    href={projects[currentIndex].codeLink} 
                    className="flex items-center gap-1 text-neon-green hover:underline hover-effect"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-5 md:-ml-10 bg-dark-gray p-2 rounded-full shadow-lg hover:bg-light-gray transition-colors z-10 hover-effect"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-neon-green" size={24} />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-5 md:-mr-10 bg-dark-gray p-2 rounded-full shadow-lg hover:bg-light-gray transition-colors z-10 hover-effect"
            aria-label="Next project"
          >
            <ChevronRight className="text-neon-green" size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-neon-green' : 'bg-light-gray'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;