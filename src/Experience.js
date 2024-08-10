import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  background-color: black;
  color: white;
  min-height: 100vh;
  font-family: 'Press Start 2P', cursive;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px; /* Increased margin-bottom for more space below the title */
  text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* Increased gap between cards */
`;

const ExperienceCard = styled.div`
  background: #222;
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 20px; /* Increased padding inside the card */
  width: 300px; /* Increased width for better spacing */
  max-width: 100%;
  box-shadow: 0 0 10px #ff0000;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #00ff99;
  }
`;

const ExperienceHeader = styled.h3`
  font-size: 1.5rem; /* Smaller font size */
  margin-bottom: 10px; /* Added margin-bottom for spacing below the header */
  text-shadow: 1px 1px #ff0000;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem; /* Smaller font size */
  margin: 10px 0; /* Added margin-top and margin-bottom for spacing between descriptions */
`;

const Link = styled.a`
  color: #00ff99; /* Neon green or any color you prefer */
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ExperienceSection = () => {
  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Experience</SectionTitle>
      <ExperienceList>
        <ExperienceCard>
          <ExperienceHeader>
              Deputy Head Of Tech
          </ExperienceHeader>
          <ExperienceDescription>
            <Link href="https://www.linkedin.com/company/indian-students-science-society/mycompany" target="_blank" rel="noopener noreferrer">
              Young Scientists of India
            </Link>
          </ExperienceDescription>
          <ExperienceDescription>
            Leading the tech division, working on organising the hackathon and other events. Additionally, managing the development of the website and other technological infrastructure.
          </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceHeader>Researcher</ExperienceHeader>
          <ExperienceDescription>
            <Link href = "https://astra-research.github.io/website/">
            ASTRA
            </Link>
          </ExperienceDescription>
          <ExperienceDescription>
            Worked on the multilingual fact checking project as a co-author, currently leading the project on Quantum Physics Informed Neural Networks. Also developed the website to assist with outreach programs.
          </ExperienceDescription>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceHeader>Founder</ExperienceHeader>
          <ExperienceDescription>           
            Tonsa Works
          </ExperienceDescription>
          <ExperienceDescription>
            Being a web development agency, I co-ordinated all orders and managed the development of the websites. Additionally, I worked on the backend of the websites and helped develop outreach programs.
          </ExperienceDescription>
        </ExperienceCard>    
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default ExperienceSection;
