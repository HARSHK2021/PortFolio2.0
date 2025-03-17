import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // After 3 seconds, start fading out the intro
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={onComplete}
    >
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.5,
              ease: "easeInOut"
            }
          }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-white font-mono"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            exit={{ 
              opacity: 0,
              scale: 1.2,
              filter: "blur(10px)",
              transition: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
          >
            Hey👋 there
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;