import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import studynotion from '../assets/studynotion.png';
import animeplatform from '../assets/animeplatform.png';
import shreeGita from '../assets/shreeGita.png';
import sudoko from '../assets/sudoko.png';
import FloppyBird from '../assets/FloppyBird.png';
import bookmyride from '../assets/bookmyride.png';
import carrerHive from '../assets/carrerHive.png';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay effect
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 2000); // Changed from 3000 to 2000ms

      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: studynotion,
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      liveLink: t('projects.project1.liveLink'),
      codeLink: t('projects.project1.codeLink'),
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: animeplatform,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveLink: t('projects.project2.liveLink'),
      codeLink: t('projects.project2.codeLink'),
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: shreeGita,
      technologies: ['Next.js', 'Framer Motion', , 'Tailwind CSS'],
      liveLink: t('projects.project3.liveLink'),
      codeLink: t('projects.project3.codeLink'),
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: carrerHive,
      technologies: ['JavaScript', 'Tailwind CSS', 'React' , 'shadcn'],
      liveLink: t('projects.project4.liveLink'),
      codeLink: t('projects.project4.codeLink'),
    },
    {
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      image: sudoko,
      technologies: ['Next.js', 'Tailwind CSS'],
      liveLink: t('projects.project5.liveLink'),
      codeLink: t('projects.project5.codeLink'),
    },
    {
      title: t('projects.project6.title'),
      description: t('projects.project3.description'),
      image: bookmyride,
      technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS' ,'GoogleMapAPI'],
      liveLink: t('projects.project6.liveLink'),
      codeLink: t('projects.project6.codeLink'),
    },
    {
      title: t('projects.project7.title'),
      description: t('projects.project7.description'),
      image: FloppyBird,
      technologies: ['Next.js',  'Tailwind CSS'],
      liveLink: t('projects.project7.liveLink'),
      codeLink: t('projects.project7.codeLink'),
    }
  ];

  const variants = {
    center: {
      zIndex: 3,
      x: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
    },
    left: {
      zIndex: 2,
      x: '-65%',
      scale: 0.8,
      opacity: 0.6,
      rotateY: 45,
    },
    right: {
      zIndex: 2,
      x: '65%',
      scale: 0.8,
      opacity: 0.6,
      rotateY: -45,
    },
    hidden: {
      zIndex: 1,
      x: 0,
      scale: 0.6,
      opacity: 0,
      rotateY: 0,
    }
  };

  const getPosition = (index: number) => {
    if (index === currentIndex) return 'center';
    if (index === (currentIndex - 1 + projects.length) % projects.length) return 'left';
    if (index === (currentIndex + 1) % projects.length) return 'right';
    return 'hidden';
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

        <div 
          ref={ref} 
          className="relative h-[700px] sm:h-[800px] perspective-[1500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={variants}
                initial="hidden"
                animate={getPosition(index)}
                transition={{
                  duration: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="absolute w-[320px] sm:w-[400px] md:w-[450px] bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-neon-green/20"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={getPosition(index) === 'center' ? {
                  scale: 1.05,
                  transition: { duration: 0.15 }
                } : {}}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs sm:text-sm px-2 py-1 bg-light-gray rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {getPosition(index) === 'center' && (
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.liveLink} 
                        className="flex items-center gap-2 text-neon-green hover:underline hover-effect text-sm sm:text-base"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                        {t('projects.viewProject')}
                      </a>
                      <a 
                        href={project.codeLink} 
                        className="flex items-center gap-2 text-neon-green hover:underline hover-effect text-sm sm:text-base"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github size={18} className="sm:w-5 sm:h-5" />
                        {t('projects.viewCode')}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <motion.button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-dark-gray p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-light-gray transition-colors z-10"
            whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            <ChevronLeft className="text-neon-green w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>
          <motion.button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-dark-gray p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-light-gray transition-colors z-10"
            whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            <ChevronRight className="text-neon-green w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;