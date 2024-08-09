import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #fff;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ff6b81;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;

  a {
    color: #fff;
    font-size: 1.5rem;
    margin-right: 20px;
    transition: color 0.3s;

    &:hover {
      color: #ff6b81;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>About Us</SectionTitle>
          <SectionText>
            We are a startup dedicated to helping businesses grow their online presence through social media advertising
            and website creation services. Our goal is to provide impactful solutions that connect businesses with their
            customers.
          </SectionText>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <LinksList>
            <LinkItem><Link to="/">Home</Link></LinkItem>
            <LinkItem><Link to="/about">About</Link></LinkItem>
            <LinkItem><Link to="/services">Services</Link></LinkItem>
            <LinkItem><Link to="/contact">Contact</Link></LinkItem>
          </LinksList>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>Email: dottmediatn@gmail.com</SectionText>
          <SectionText>Phone: +91 63741 49044</SectionText>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>

            <a href="https://www.instagram.com/dottmediatn?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
           
          </SocialIcons>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
