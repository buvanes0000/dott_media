import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaBullhorn, FaGlobe, FaShoppingCart, FaCheckCircle, FaChartLine, FaAd, FaCode } from 'react-icons/fa';
import { SocialMediaNav } from '../components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
    animation: ${props => (props.animationType === "spin" ? spin : props.animationType === "move" ? move : "")} 2s infinite;
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

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ServicesWrapper>
      <Section>
        <SectionHeader>Social Media Ad Services</SectionHeader>
        <IntroContent>
          Boost your online presence with our comprehensive social media advertising services. We handle everything from ad campaign setup to daily post creation, ensuring maximum engagement and reach.
        </IntroContent>
        <CardsWrapper>
          <Card data-aos="fade-up">
            <IconWrapper animationType="spin">
              <FaFacebook />
            </IconWrapper>
            <CardHeader>Social Media Ad Service (1 Month)</CardHeader>
            <CardBody>
              <Price>₹15,000</Price>
              <Description>Complete ad running and daily post creation for 1 month.</Description>
              <Features>
                <Feature><FaBullhorn /> Ad Campaign Setup</Feature>
                <Feature><FaChartLine /> Daily Post Creation</Feature>
                <Feature><FaCheckCircle /> Performance Reports</Feature>
                <Feature><FaCheckCircle /> Target Audience Analysis</Feature>
                <Feature><FaCheckCircle /> Engagement Boost</Feature>
              </Features>
            </CardBody>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="100">
            <IconWrapper animationType="move">
              <FaInstagram />
            </IconWrapper>
            <CardHeader>Social Media Ad Service (15 Days)</CardHeader>
            <CardBody>
              <Price>₹8,000</Price>
              <Description>Complete ad running and daily post creation for 15 days.</Description>
              <Features>
                <Feature><FaBullhorn /> Ad Campaign Setup</Feature>
                <Feature><FaChartLine /> Daily Post Creation</Feature>
                <Feature><FaCheckCircle /> Performance Reports</Feature>
                <Feature><FaCheckCircle /> Target Audience Analysis</Feature>
                <Feature><FaCheckCircle /> Engagement Boost</Feature>
              </Features>
            </CardBody>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="200">
            <IconWrapper>
              <FaAd />
            </IconWrapper>
            <CardHeader>Social Media Ad Service (1 Week)</CardHeader>
            <CardBody>
              <Price>₹4,500</Price>
              <Description>Complete ad running and daily post creation for 1 week.</Description>
              <Features>
                <Feature><FaBullhorn /> Ad Campaign Setup</Feature>
                <Feature><FaChartLine /> Daily Post Creation</Feature>
                <Feature><FaCheckCircle /> Performance Reports</Feature>
                <Feature><FaCheckCircle /> Target Audience Analysis</Feature>
                <Feature><FaCheckCircle /> Engagement Boost</Feature>
              </Features>
            </CardBody>
          </Card>
        </CardsWrapper>
      </Section>

      <Section>
        <SectionHeader>Website Design Services</SectionHeader>
        <IntroContent>
          Create a stunning online presence with our professional website design services. Whether you need a basic website or a full-featured e-commerce site, we've got you covered with responsive and SEO-friendly designs.
        </IntroContent>
        <CardsWrapper>
          <Card data-aos="fade-up">
            <IconWrapper animationType="spin">
              <FaGlobe />
            </IconWrapper>
            <CardHeader>Basic Website Design</CardHeader>
            <CardBody>
              <Price>₹6,000</Price>
              <Description>Multiple page basic website design.</Description>
              <Features>
                <Feature><FaCheckCircle /> Responsive Design</Feature>
                <Feature><FaCheckCircle /> SEO Friendly</Feature>
                <Feature><FaCheckCircle /> Customizable Templates</Feature>
                <Feature><FaCheckCircle /> Fast Load Time</Feature>
                <Feature><FaCheckCircle /> Basic Support</Feature>
              </Features>
            </CardBody>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="100">
            <IconWrapper animationType="move">
              <FaShoppingCart />
            </IconWrapper>
            <CardHeader>E-commerce Website</CardHeader>
            <CardBody>
              <Price>₹15,000</Price>
              <Description>Full-featured e-commerce website design.</Description>
              <Features>
                <Feature><FaCheckCircle /> Product Management</Feature>
                <Feature><FaCheckCircle /> Payment Gateway Integration</Feature>
                <Feature><FaCheckCircle /> Order Management</Feature>
                <Feature><FaCheckCircle /> Customer Accounts</Feature>
                <Feature><FaCheckCircle /> Advanced Support</Feature>
              </Features>
            </CardBody>
          </Card>
        </CardsWrapper>
      </Section>

      <Section>
        <SectionHeader>Mega Packages</SectionHeader>
        <IntroContent>
          Get the best of both worlds with our Mega Packages. Combine our top-notch social media ad services with professional website design to maximize your online impact and drive business growth.
        </IntroContent>
        <CardsWrapper>
          <Card data-aos="fade-up">
            <IconWrapper animationType="spin">
              <FaCode />
            </IconWrapper>
            <CardHeader>Mega Pack</CardHeader>
            <CardBody>
              <Price>₹30,000</Price>
              <Description>Includes 1 month ad service and basic website design.</Description>
              <Features>
                <Feature><FaBullhorn /> Social Media Ad Campaign</Feature>
                <Feature><FaChartLine /> Daily Post Creation</Feature>
                <Feature><FaCheckCircle /> Basic Website Design</Feature>
                <Feature><FaCheckCircle /> Performance Reports</Feature>
                <Feature><FaCheckCircle /> Engagement Boost</Feature>
              </Features>
            </CardBody>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="100">
            <IconWrapper animationType="move">
              <FaCode />
            </IconWrapper>
            <CardHeader>Mega E-commerce Pack</CardHeader>
            <CardBody>
              <Price>₹40,000</Price>
              <Description>Includes 1 month ad service and e-commerce website design.</Description>
              <Features>
                <Feature><FaBullhorn /> Social Media Ad Campaign</Feature>
                <Feature><FaChartLine /> Daily Post Creation</Feature>
                <Feature><FaCheckCircle /> E-commerce Website Design</Feature>
                <Feature><FaCheckCircle /> Performance Reports</Feature>
                <Feature><FaCheckCircle /> Engagement Boost</Feature>
              </Features>
            </CardBody>
          </Card>
        </CardsWrapper>
      </Section>
      <SocialMediaNav/>
    </ServicesWrapper>
  );
};

export default Services;
