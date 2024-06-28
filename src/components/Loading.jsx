// LoadingAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json'; // Update the path to your JSON file


const Loading = () => {
  return (
    <div style={styles.container}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height to center the animation
  },
};

export default Loading;
