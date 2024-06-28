import React, { useEffect } from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/abouthome.jpg';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: left;

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.img`
  width: 25rem;
  border-radius: 10px;
  height: 30rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const AboutContent = styled.div`
  max-width: 600px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const AboutHome = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library on component mount
  }, []);

  return (
    <AboutContainer>
      <AboutImage src={aboutImage} alt="About Us" data-aos="fade-right" data-aos-delay="300" />
      <AboutContent>
        <AboutTitle data-aos="fade-left" data-aos-delay="500">About Our Company</AboutTitle>
        <AboutText data-aos="fade-up" data-aos-delay="700">
          We are a startup social media advertising company committed to helping businesses grow their online presence.
          Our passionate team uses innovative strategies and tools to create impactful ads that resonate with your target audience.
          In addition to social media advertising, we also offer website creation services to help establish and enhance your digital footprint.
          We believe in the transformative power of social media and websites to connect businesses with their customers in meaningful ways.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutHome;

