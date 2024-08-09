// src/pages/About.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import adImage1 from '../assets/ad1.jpg';
import adImage2 from '../assets/ad2.jpg';
import adImage3 from '../assets/ad3.jpg';
import adImage4 from '../assets/ad4.jpg';
import adImage5 from '../assets/ad5.png';
import webImage1 from '../assets/web1.jpg';
import webImage2 from '../assets/web2.jpg';
import webImage3 from '../assets/web3.jpg';
import webImage4 from '../assets/web4.jpg';
import webImage5 from '../assets/web5.jpg';
import { SocialMediaNav, Testimonial } from '../components';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

const AboutContainer = styled.div`
  padding: 60px 20px;
  background: #f9f9f9;
  color: #333;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Section = styled.div`
  margin-bottom: 60px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #ff6b81;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectSectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ff6b81;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  font-size: 1rem;
  color: #ff6b81;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const adProjects = [
    { id: 1, image: adImage1, title: "Project 1: Summer Sale Campaign", description: "This project involved creating a series of eye-catching ads for a summer sale campaign. The ads were designed to attract attention and drive traffic to the client's website." },
    { id: 2, image: adImage2, title: "Project 2: New Product Launch", description: "We developed a social media ad campaign to promote the launch of a new product. The campaign included teaser ads, product showcases, and customer testimonials." },
    { id: 3, image: adImage3, title: "Project 3: Brand Awareness", description: "Our team created a brand awareness campaign for a startup company. The ads highlighted the unique value propositions and encouraged users to learn more about the brand." },
    { id: 4, image: adImage4, title: "Project 4: Event Promotion", description: "We designed a series of ads to promote a client's upcoming event. The ads were optimized for engagement and included a call-to-action to register for the event." },
    { id: 5, image: adImage5, title: "Project 5: Holiday Campaign", description: "This project involved creating festive ads for a holiday campaign. The ads featured holiday-themed graphics and messaging to drive sales during the holiday season." },
  ];

  const webProjects = [
    { id: 1, image: webImage1, title: "Project 1: E-commerce Website", description: "We developed a sleek and user-friendly e-commerce website for a retail client. The website featured a robust product catalog, secure checkout process, and responsive design.", url: "https://example.com/ecommerce" },
    { id: 2, image: webImage2, title: "Project 2: Portfolio Website", description: "Our team created a stunning portfolio website for a freelance photographer. The website showcased the photographer's work and included a contact form for booking inquiries.", url: "https://example.com/portfolio" },
    { id: 3, image: webImage3, title: "Project 3: Corporate Website", description: "We designed a professional corporate website for a consulting firm. The website included detailed service pages, team profiles, and a blog section." },
    { id: 4, image: webImage4, title: "Project 4: Non-Profit Website", description: "This project involved developing a website for a non-profit organization. The website featured information about the organization's mission, upcoming events, and donation options." },
    { id: 5, image: webImage5, title: "Project 5: Blog Website", description: "We created a blog website for a lifestyle blogger. The website included various blog categories, a search functionality, and social media integration." },
  ];

  const recentWebProjects = webProjects.filter(project => project.url); // Filter projects that have a URL

  return (
    <AboutContainer>
      <Section>
        <Title>About Our Company</Title>
        <Paragraph>
          We are a startup social media advertising company dedicated to helping businesses grow their online presence. Our team of experts utilizes cutting-edge strategies and tools to create impactful ads that resonate with your target audience. We believe in the power of social media to transform businesses and connect them with their customers in meaningful ways.
        </Paragraph>
        <Paragraph>
          In addition to social media advertising, we also offer website creation services. Our talented team of web designers and developers create stunning, user-friendly websites that help businesses establish a strong online presence. We are passionate about helping our clients succeed and are committed to delivering high-quality services.
        </Paragraph>
      </Section>
      <Section>
        <ProjectSectionTitle>Our Recent Projects</ProjectSectionTitle>
        <Title>Social Media Ad Projects</Title>
        <ProjectGrid>
          {adProjects.map((project, index) => (
            <ProjectCard key={project.id} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>
      <Section>
        <Title>Recent Web Development Projects</Title>
        <ProjectGrid>
          {recentWebProjects.map((project, index) => (
            <ProjectCard key={project.id} data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">Visit</ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>
      <Section>
        <Title>Other Web Development Projects</Title>
        <ProjectGrid>
          {webProjects.filter(project => !project.url).map((project, index) => (
            <ProjectCard key={project.id} data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>
      <Testimonial />
      <SocialMediaNav />
    </AboutContainer>
  );
};

export default About;
