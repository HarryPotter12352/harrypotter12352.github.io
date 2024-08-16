import React from 'react';
import styled from 'styled-components';

const PublicationsContainer = styled.section`
  background-color: black;
  color: white;
  font-family: 'Press Start 2P', cursive;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px; /* Reduced margin-bottom to decrease space */
  text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`;

const PublicationsList = styled.div`
  display: flex;
  flex-direction: column; /* Stack cards vertically */
  align-items: center; /* Center-align the cards */
  gap: 40px; /* Increased space between cards */
`;

const PublicationCard = styled.div`
  background: #222;
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 20px;
  width: 100%; /* Full width of the page */
  max-width: 800px; /* Max width for larger screens */
  box-shadow: 0 0 10px #ff0000;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center-align content */
  text-align: center; /* Center-align text */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #00ff99;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.25rem; /* Smaller font size */
  margin: 0;
  text-shadow: 1px 1px #ff0000;
`;

const PublicationDetails = styled.p`
  font-size: 1rem; /* Smaller font size */
  margin: 5px 0;
`;

const Link = styled.a`
  color: #00ff99; /* Neon green or any color you prefer */
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PublicationsSection = () => {
  return (
    <PublicationsContainer id="publications">
      <SectionTitle>Publications</SectionTitle>
      <PublicationsList>
        <PublicationCard>
          <div>
            <PublicationTitle>
              <Link href="/pixelatedarxiv.html" target="_blank" rel="noopener noreferrer">
                A speculative model for cyclic information preservation in Kerr-Newman spacetime using closed timelike curves
              </Link>
            </PublicationTitle>
            <PublicationDetails>
              Author(s): Aviral Damle, Thomas Law
            </PublicationDetails>
            <PublicationDetails>
              Category: Cosmology
            </PublicationDetails>
            <PublicationDetails>
              Status: Submitted to Physical Review D
            </PublicationDetails>
          </div>
        </PublicationCard>
        <PublicationCard>
          <div>
            <PublicationTitle>            
              Multilingual Fact-Checking using LLMs
            </PublicationTitle>
            <PublicationDetails>
              Author(s): Aryan Singhal, Thomas Law, Coby Kassner, Evan Duan, Aviral Damle, Ayushman Gupta, Ryan Luo Li, Alin Jain
            </PublicationDetails>
            <PublicationDetails>
              Category: NLP
            </PublicationDetails>
            <PublicationDetails>
              Status: Awaiting pre-print
            </PublicationDetails>
          </div>
        </PublicationCard>
        <PublicationCard>
          <div>
            <PublicationTitle>            
              Using Hybrid Quantum Physics Informed Neural Networks to Simulate Fermion Motion
            </PublicationTitle>
            <PublicationDetails>
              Author(s): Aviral Damle et. al (to be decided)
            </PublicationDetails>
            <PublicationDetails>
              Category: Computational Physics
            </PublicationDetails>
            <PublicationDetails>
              Status: Work in progress
            </PublicationDetails>
          </div>
        </PublicationCard>
      </PublicationsList>
    </PublicationsContainer>
  );
};

export default PublicationsSection;
