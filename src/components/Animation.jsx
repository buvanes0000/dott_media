// Animation.js
import React, { useEffect, useRef } from 'react';
import bodymovin from 'bodymovin';
import animationData from '../assets/animation.json'; // Update the path to your JSON file

const Animation = () => {
  const animContainer = useRef(null);

  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: animContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); // Cleanup on unmount
  }, []);

  return <div ref={animContainer} style={{ width: '100%', height: '100%' }} />;
};

export default Animation;
