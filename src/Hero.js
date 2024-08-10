import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import link from "./assets/link.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  font-family: 'Press Start 2P', cursive;
  position: relative;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
  margin-top: 20px; /* Moves title higher */
  animation: ${blink} 1.5s steps(1, start) 2; /* Blinks twice and then stops */
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px; /* Moves subtitle higher */
  text-align: center;
  margin-bottom: 20px;
  animation: ${blink} 1.5s steps(1, start) 2; /* Blinks twice and then stops */
`;

const PulsatingLink = styled.img`
  position: absolute;
  bottom: 60px;
  width: 150px;
  animation: pulse 1.5s infinite;
  opacity: 0; /* Initially hidden */
  transition: opacity 1s ease-in-out; /* Smooth transition for appearance */
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  animation: overlayAnimation 15s infinite alternate;
  @keyframes overlayAnimation {
    0% { opacity: 0.5; }
    100% { opacity: 0.7; }
  }
`;

const SocialLinksContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
  opacity: 0; /* Initially hidden */
  transition: opacity 1s ease-in-out; /* Smooth transition for appearance */
`;

const RetroSocialLink = styled.a`
  color: white;
  font-size: 2rem; /* Slightly smaller icons */
  transition: color 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 2s ease-out;
  
  &:hover {
    color: #00ff99; /* Neon green or any color you prefer */
    transform: scale(1.2); /* Slightly larger on hover */
  }
`;

const SocialIcon = styled.div`
  background-color: black; /* Retro pixelated background */
  padding: 8px; /* Adjust padding to fit the smaller icon */
  border-radius: 50%;
  border: 3px solid #fff; /* Retro border color */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px #ff0000; /* Retro glow effect */
`;

const Hero = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true);
      setShowLink(true);
    }, 3000); // Duration of blinking effect (1.5s * 2 + some buffer)

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer>
      <BackgroundOverlay />
      <Title>Hi, I'm Avi</Title>
      <Subtitle>Physics Enthusiast and Web Developer</Subtitle>
      {showLink && (
        <PulsatingLink src={link} alt="Link from Zelda" style={{ opacity: 1 }} />
      )}
      {showIcons && (
        <SocialLinksContainer style={{ opacity: 1 }}>
          <RetroSocialLink href="https://github.com/harrypotter12352" target="_blank" rel="noopener noreferrer">
            <SocialIcon><FaGithub /></SocialIcon>
          </RetroSocialLink>
          <RetroSocialLink href="https://www.linkedin.com/in/aviral-damle" target="_blank" rel="noopener noreferrer">
            <SocialIcon><FaLinkedin /></SocialIcon>
          </RetroSocialLink>
          <RetroSocialLink href="https://discord.com/users/737540230957105254" target="_blank" rel="noopener noreferrer">
            <SocialIcon><FaDiscord /></SocialIcon>
          </RetroSocialLink>
        </SocialLinksContainer>
      )}
    </HeroContainer>
  );
};

export default Hero;
