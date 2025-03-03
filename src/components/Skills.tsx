import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-400' },
        { name: 'TypeScript', icon: 'TS', color: 'bg-blue-500' },
        { name: 'React', icon: '⚛️', color: 'bg-blue-400' },
        { name: 'Next.js', icon: 'N', color: 'bg-white text-black' },
        { name: 'Redux', icon: '⟲', color: 'bg-purple-600' },
        { name: 'Tailwind CSS', icon: '🌊', color: 'bg-blue-400' },
        { name: 'GSAP', icon: 'GS', color: 'bg-green-500' },
        { name: 'Framer Motion', icon: 'FM', color: 'bg-purple-500' },
        { name: 'Bootstrap', icon: 'B', color: 'bg-purple-600' },
        { name: 'Material-UI', icon: 'MU', color: 'bg-blue-600' },

       
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', icon: 'NJ', color: 'bg-green-600' },
        { name: 'Express.js', icon: 'EX', color: 'bg-gray-700' },
        { name: 'AppWrite', icon: 'AW', color: 'bg-red-500' },
      
      ]
    },
    {
      title: t('skills.database'),
      skills: [
        { name: 'MySQL', icon: 'SQL', color: 'bg-blue-600' },
        { name: 'PostgreSQL', icon: 'PG', color: 'bg-blue-800' },
        { name: 'MongoDB', icon: 'MD', color: 'bg-green-800' },
        { name: 'Redis', icon: 'RD', color: 'bg-red-800' },
        

      ]
    },
    {
      title: t('skills.others'),
      skills: [
        { name: 'AWS', icon: 'AWS', color: 'bg-blue-700' },
        { name: 'Firebase', icon: 'FB', color: 'bg-red-500' },
        { name: 'Docker', icon: 'D', color: 'bg-gray-800' },
        { name: 'Kubernetes', icon: 'K', color: 'bg-blue-800' },
        { name: 'Git', icon: 'GIT', color: 'bg-gray-700' },
        { name: 'Version Control', icon: 'VC', color: 'bg-blue-800' },
       
      ]
    },
    

  ];

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title after:content-[''] after:block after:w-24 after:h-1 after:bg-neon-green after:mx-auto after:mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {t('skills.title')}
          </motion.h2>
        </div>

        <motion.div 
          ref={ref}
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-8 neon-text">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="card hover:translate-y-[-5px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-bold ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;