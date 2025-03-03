import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-2 neon-text glitch"
              data-text={t('hero.title')}
              variants={itemVariants}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-4"
              variants={itemVariants}
            >
              {t('hero.greeting')}
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-8 max-w-lg"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="btn btn-primary hover-effect"
              onClick={() => window.location.href = 'mailto:harshsagar396@gmail.com'}>
                {t('hero.hireMe')}
              </button>
            </motion.div>
          </div>

          <motion.div 
            className="md:w-1/2 grid grid-cols-1 gap-6"
            variants={statsVariants}
          >
            <div className="flex justify-end">
              <div className="text-right">
                <span className="text-5xl md:text-6xl font-bold neon-text">1.5+</span>
                <p className="text-gray-300">{t('hero.stats.years')}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-right">
                <span className="text-5xl md:text-6xl font-bold neon-text">7+</span>
                <p className="text-gray-300">{t('hero.stats.projects')}</p>
              </div>
            </div>
          
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hover-effect"
        onClick={scrollToAbout}
        initial={{ y: -10, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 0.5
          }
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <ArrowDown className="text-neon-green animate-bounce" size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;