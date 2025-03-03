import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-dark-gray relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
           
            <motion.h2 
              custom={1}
              variants={textVariants}
              className=" text-center section-title after:content-[''] after:block after:w-24 after:h-1 after:bg-neon-green after:mx-auto after:mt-2"
            >
              {t('about.title')}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              custom={2}
              variants={textVariants}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">{t('about.heading')}</h3>
              <p className="text-xl leading-relaxed text-gray-300">
                {t('about.philosophy')}
              </p>
            </motion.div>

            <motion.div 
              custom={3}
              variants={textVariants}
              className="space-y-4 text-gray-300"
            >
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;