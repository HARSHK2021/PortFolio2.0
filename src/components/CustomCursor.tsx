import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      
      // Add cursor-none class to body
      document.body.classList.add('cursor-none');
      
      // Track link hovers
      const links = document.querySelectorAll('a, button, .hover-effect');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      
      // Remove cursor-none class from body
      document.body.classList.remove('cursor-none');
      
      // Remove link hover listeners
      const links = document.querySelectorAll('a, button, .hover-effect');
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => setLinkHovered(true));
        link.removeEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    // Add event listeners when component mounts
    addEventListeners();

    // Cleanup event listeners when component unmounts
    return () => removeEventListeners();
  }, []);

  // Update link hover detection on DOM changes
  useEffect(() => {
    const updateLinkListeners = () => {
      const links = document.querySelectorAll('a, button, .hover-effect');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(updateLinkListeners);
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Cleanup
    return () => observer.disconnect();
  }, []);

  const cursorDotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) scale(${clicked ? 0.5 : 1})`,
    opacity: hidden ? 0 : 1
  };

  const cursorCircleStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
    width: linkHovered ? '50px' : '40px',
    height: linkHovered ? '50px' : '40px',
    opacity: hidden ? 0 : 1,
    backgroundColor: linkHovered ? 'rgba(0, 255, 65, 0.1)' : 'transparent'
  };

  return (
    <>
      <div className="cursor-dot" style={cursorDotStyle}></div>
      <div className="cursor-circle" style={cursorCircleStyle}></div>
    </>
  );
};

export default CustomCursor;