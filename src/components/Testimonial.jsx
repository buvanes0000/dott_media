// src/components/Testimonials.js

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsContainer = styled.div`
  padding: 60px 20px;
  background: #f9f9f9;
  color: #333;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #ff6b81;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  perspective: 1000px;
  max-width: 400px;
  margin: auto;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ff6b81;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const Emoji = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Testimonials = () => {
  const testimonials = [
    {
      emoji: '😊',
      name: 'Arun Kumar',
      text: 'Sevai miga arumai! Engal vaniga valarchikku miga mukkiyamaaga amaindhadhu. Thangalukku nandri!',
    },
    {
      emoji: '👍',
      name: 'Ramya Selvam',
      text: 'Ivargalin social media ad sevai engal virpanaiyil miga periya thaakkaam seyadhu. Miga nandri!',
    },
    {
      emoji: '🌟',
      name: 'Chandra Prakash',
      text: 'Ivargalin web design sevai nichchayamaga engal vanigathai oru pudhiya nilayil kondu sendradhu. Nandri!',
    },
    {
      emoji: '💖',
      name: 'Chitra Venkatesh',
      text: 'Sevai tharamanaathu matrum neramudan mudikapattadhu. Miga nalla anubavam!',
    },
    {
      emoji: '👏',
      name: 'Manikandan Subramanian',
      text: 'Arputamana ad sevai matrum vadaikkaikaga aadharam. Migavum parinduuraikkindren!',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)', // Smooth 3D effect
  };

  return (
    <TestimonialsContainer>
      <SectionTitle>Testimonials</SectionTitle>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialWrapper key={index}>
            <TestimonialCard>
              <Emoji>{testimonial.emoji}</Emoji>
              <ProfileName>{testimonial.name}</ProfileName>
              <TestimonialText>{testimonial.text}</TestimonialText>
            </TestimonialCard>
          </TestimonialWrapper>
        ))}
      </Slider>
    </TestimonialsContainer>
  );
};

export default Testimonials;
