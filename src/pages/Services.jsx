import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaBullhorn, FaGlobe, FaShoppingCart, FaCheckCircle, FaChartLine, FaAd, FaCode, FaSearch } from 'react-icons/fa';
import { SocialMediaNav } from '../components';

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const breath = keyframes`
  from 0% {
    transform: scale(1);
  } 
  50% {
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
`;

const move = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const ServicesWrapper = styled.div`
  padding: 40px 20px;
  background-color: #f5f5f5;
`;

const Section = styled.div`
  margin-bottom: 60px;
`;

const SectionHeader = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2em;
`;

const IntroContent = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 1.1em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => (props.filtering ? '0' : '1')};
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const IconWrapper = styled.div`
  margin-top: 20px;
  font-size: 3em;
  color: #ff6b81;

  svg {
    animation: ${props => (props.animationType === "spin" ? spin : props.animationType === "move" ? move : props.animationType === "breath" ? breath : "")} 2s infinite;
  }
`;

const CardHeader = styled.div`
  padding: 10px 20px;
  font-size: 1.5em;
  color: #333;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Price = styled.div`
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
`;

const Description = styled.div`
  margin: 10px 0;
  color: #666;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  color: #666;
  text-align: left;
`;

const Feature = styled.li`
  margin: 5px 0;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }
`;

const FilterNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; /* Adjust the space between buttons */
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    justify-content: center; /* Start buttons from the left */
    padding: 0 10px; /* Add horizontal padding */
  }
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid #000;
  border-radius: 5px;

  background-color: #333;
  color: white;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #ff6b81;
  }
`;

const Services = () => {
  const [filter, setFilter] = useState('all');
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFilterChange = (newFilter) => {
    setFiltering(true);
    setTimeout(() => {
      setFilter(newFilter);
      setFiltering(false);
    }, 300); // Adjust this timing to match your transition duration
  };

  const services = [
    {
      type: 'social',
      icon: <FaFacebook />,
      title: 'Social Media Ad Service (1 Month)',
      price: '₹15,000',
      description: 'Complete ad running and daily post creation for 1 month.',
      features: [
        'Ad Campaign Setup',
        'Daily Post Creation',
        'Performance Reports',
        'Target Audience Analysis',
        'Engagement Boost'
      ],
      animationType: 'breath'
    },
    {
      type: 'social',
      icon: <FaInstagram />,
      title: 'Social Media Ad Service (15 Days)',
      price: '₹8,000',
      description: 'Complete ad running and daily post creation for 15 days.',
      features: [
        'Ad Campaign Setup',
        'Daily Post Creation',
        'Performance Reports',
        'Target Audience Analysis',
        'Engagement Boost'
      ],
      animationType: 'move'
    },
    {
      type: 'social',
      icon: <FaAd />,
      title: 'Social Media Ad Service (1 Week)',
      price: '₹4,500',
      description: 'Complete ad running and daily post creation for 1 week.',
      features: [
        'Ad Campaign Setup',
        'Daily Post Creation',
        'Performance Reports',
        'Target Audience Analysis',
        'Engagement Boost'
      ],
      animationType: 'spin'
    },
    {
      type: 'web',
      icon: <FaGlobe />,
      title: 'Single Page Website Design',
      price: '₹6,000',
      description: 'Single page responsive website design.',
      features: [
        'Responsive Design',
        'SEO Friendly',
        'Customizable Templates',
        'Fast Load Time',
        'Basic Support'
      ],
      animationType: 'breath'
    },
    {
      type: 'web',
      icon: <FaGlobe />,
      title: 'Multi-Page Website Design',
      price: '₹10,000',
      description: 'Multiple page responsive website design.',
      features: [
        'Responsive Design',
        'SEO Friendly',
        'Customizable Templates',
        'Fast Load Time',
        'Basic Support'
      ],
      animationType: 'move'
    },
    {
      type: 'web',
      icon: <FaShoppingCart />,
      title: 'E-commerce Website',
      price: '₹15,000',
      description: 'Full-featured e-commerce website design.',
      features: [
        'Product Management',
        'Payment Gateway Integration',
        'Order Management',
        'Customer Accounts',
        'Advanced Support'
      ],
      animationType: 'spin'
    },
    {
      type: 'seo',
      icon: <FaSearch />,
      title: 'SEO Service (1 Month)',
      price: '₹7,000',
      description: 'Complete SEO optimization for 1 month.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Off-Page SEO',
        'Technical SEO',
        'Performance Reports'
      ],
      animationType: 'breath'
    },
    {
      type: 'mega',
      icon: <FaCode />,
      title: 'Mega Pack',
      price: '₹30,000',
      description: 'Includes 2 month ad service and basic website design.',
      features: [
        'Social Media Ad Campaign',
        'Daily Post Creation',
        'Basic Website Design',
        'Performance Reports',
        'Engagement Boost'
      ],
      animationType: 'spin'
    },
    {
      type: 'mega',
      icon: <FaCode />,
      title: 'Mega E-commerce Pack',
      price: '₹40,000',
      description: 'Includes 2 month ad service and e-commerce website design.',
      features: [
        'Social Media Ad Campaign',
        'Daily Post Creation',
        'E-commerce Website Design',
        'Performance Reports',
        'Engagement Boost'
      ],
      animationType: 'spin'
    }
  ];

  const filteredServices = filter === 'all' ? services : services.filter(service => service.type === filter);

  return (
    <ServicesWrapper>
      <FilterNav>
        <FilterButton className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</FilterButton>
        <FilterButton className={filter === 'social' ? 'active' : ''} onClick={() => handleFilterChange('social')}>Social Media</FilterButton>
        <FilterButton className={filter === 'web' ? 'active' : ''} onClick={() => handleFilterChange('web')}>Website</FilterButton>
        <FilterButton className={filter === 'seo' ? 'active' : ''} onClick={() => handleFilterChange('seo')}>SEO</FilterButton>
        <FilterButton className={filter === 'mega' ? 'active' : ''} onClick={() => handleFilterChange('mega')}>Mega Packages</FilterButton>
      </FilterNav>

      <Section>
        <SectionHeader>Services</SectionHeader>
        <CardsWrapper filtering={filtering}>
          {filteredServices.map((service, index) => (
            <Card key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <IconWrapper animationType={service.animationType}>
                {service.icon}
              </IconWrapper>
              <CardHeader>{service.title}</CardHeader>
              <CardBody>
                <Price>{service.price}</Price>
                <Description>{service.description}</Description>
                <Features>
                  {service.features.map((feature, idx) => (
                    <Feature key={idx}><FaCheckCircle /> {feature}</Feature>
                  ))}
                </Features>
              </CardBody>
            </Card>
          ))}
        </CardsWrapper>
      </Section>
      <SocialMediaNav />
    </ServicesWrapper>
  );
};

export default Services;
