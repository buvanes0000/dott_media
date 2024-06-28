import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const MiniIconContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1000; /* Ensure the icon is above other elements */
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 107, 129, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 10px 20px rgba(255, 107, 129, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 107, 129, 0);
  }
`;

const MiniIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  transition: transform 0.3s;
  animation: ${pulse} 1.5s infinite;

  &:hover {
    transform: scale(1.1);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const upAndDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const SocialIcons = styled.div`
  position: relative;
  width: 150px; /* Adjust size to fit the circle */
  height: 75px; /* Adjust size to fit the semi-circle */
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.a`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6b81;
  font-size: 20px;
  opacity: ${props => (props.visible ? '1' : '0')};
  ${({ visible, index }) =>
    visible &&
    css`
      animation: ${appear} 0.3s ease-in-out forwards, ${upAndDown} 1.5s ease-in-out infinite;
      animation-delay: ${index * 0.2}s;
    `}
  transition: background-color 0.3s;
  &:hover {
    background-color: #777;
  }
`;

const getPosition = (index, total, radius) => {
  const angle = (index / total) * Math.PI; // Semi-circle
  const x = radius * Math.cos(angle) - radius; // Shift left by radius
  const y = radius * Math.sin(angle);
  return { x, y };
};

const SocialMediaNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const icons = [
    { href: "https://www.facebook.com", icon: faFacebookF },
    { href: "https://www.twitter.com", icon: faTwitter },
    { href: "https://www.instagram.com", icon: faInstagram }
  ];

  return (
    <MiniIconContainer style={{ display: isVisible ? 'flex' : 'none' }}>
      <MiniIcon onClick={toggleIcons}>
        <FontAwesomeIcon icon={faRocket} />
      </MiniIcon>
      <SocialIcons>
        {icons.map((icon, index) => {
          const position = getPosition(index, icons.length, 60);
          return (
            <SocialIcon
              key={icon.href}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              visible={showIcons}
              index={index}
              style={{ 
                top: `calc(-200% + ${position.y}px)`,
                left: `calc(40% + ${position.x}px)`,
                transform: `translate(-50%, -50%)`
              }}
            >
              <FontAwesomeIcon icon={icon.icon} />
            </SocialIcon>
          );
        })}
      </SocialIcons>
    </MiniIconContainer>
  );
};

export default SocialMediaNav;
