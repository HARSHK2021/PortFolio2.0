import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './i18n';

// Components
import IntroAnimation from './components/IntroAnimation';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Add noise overlay effect
  useEffect(() => {
    const noiseElement = document.createElement('div');
    noiseElement.className = 'noise';
    document.body.appendChild(noiseElement);

    return () => {
      document.body.removeChild(noiseElement);
    };
  }, []);

  // Prevent scrolling during intro animation
  useEffect(() => {
    if (!introCompleted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [introCompleted]);

  return (
    <div className="relative">
      <IntroAnimation onComplete={() => setIntroCompleted(true)} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: introCompleted ? 1 : 0,
          transition: { 
            duration: 1,
            delay: 0.5
          }
        }}
        className="relative"
      >
        <ParticleBackground />
        <CustomCursor />
        
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-neon-green z-50 origin-left"
          style={{ scaleX }}
        />
        
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;