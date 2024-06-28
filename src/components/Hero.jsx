import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/socialmedia.json'; // Update the path to your JSON file

// Styled-components
const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: #f9f9f9;
  text-align: center;
  padding-left: 5rem;

  @media (max-width: 974px) {
    flex-direction: column-reverse;
    padding-left: 0;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  color: #000;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  color: #121212;

  text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 1139px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  background: #ff6b81;
  color: #fff;
  border: 1px solid #fff;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #ff4757;
    transform: translateY(-3px);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border: 0;
  }
`;

const HeroAnimation = styled.div`
  max-width: 50%;
  min-width: 40%;
  height: auto;
  border-radius: 10px;
  margin-left: 2rem;

  @media (max-width: 768px) {
    min-width: 20rem;
    margin-left: 0;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
      <HeroTitle>Top Social Media Marketing Services</HeroTitle>
<HeroSubtitle>Boost Your Business with Our Expert Social Media Advertising Solutions</HeroSubtitle>

        <HeroButton to="/about">Learn More</HeroButton>
      </HeroContent>
      <HeroAnimation>
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: '100%', height: '100%' }} // Adjust size as needed
        />
      </HeroAnimation>
    </HeroContainer>
  );
};

export default Hero;
