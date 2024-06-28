import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaBullhorn, FaRegChartBar, FaCogs, FaBusinessTime } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

const ServicesContainer = styled.div`
  padding: 60px 20px;
  background: #fff;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const ServicesIntro = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 250px;
  text-align: center;
 box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  color: #ff6b81;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

const ServiceButton = styled(Link)`
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
  margin-top: 2rem;

  &:hover {
    background: #ff4757;
    transform: translateY(-3px);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border: 0;
  }
`;

const ServicesHome = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library on component mount
  }, []);

  return (
    <ServicesContainer>
      <ServicesTitle data-aos="fade-up">Our Services</ServicesTitle>
      <ServicesIntro data-aos="fade-up">
        We offer a range of services to help your business grow its online presence. Our dedicated team
        is here to provide you with the best solutions tailored to your needs.
      </ServicesIntro>
      <ServicesGrid>
        <ServiceCard data-aos="fade-up">
          <ServiceIcon><FaLaptopCode /></ServiceIcon>
          <ServiceTitle>Web Designing</ServiceTitle>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-delay="100">
          <ServiceIcon><FaBullhorn /></ServiceIcon>
          <ServiceTitle>Social Media Ads</ServiceTitle>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-delay="200">
          <ServiceIcon><FaRegChartBar /></ServiceIcon>
          <ServiceTitle>Content Management</ServiceTitle>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-delay="300">
          <ServiceIcon><FaCogs /></ServiceIcon>
          <ServiceTitle>Social Media Page Creation</ServiceTitle>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-delay="400">
          <ServiceIcon><FaBusinessTime /></ServiceIcon>
          <ServiceTitle>Google Business</ServiceTitle>
        </ServiceCard>
      </ServicesGrid>
      <ServiceButton to="/services" data-aos="fade-up" data-aos-delay="500">Learn More</ServiceButton>
    </ServicesContainer>
  );
};

export default ServicesHome;

