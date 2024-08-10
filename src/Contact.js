import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background-color: black;
  color: white;
  font-family: 'Press Start 2P', cursive;
  min-height: 100vh; /* Ensure the section takes up full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  text-align: center;
  padding: 50px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`;

const ContactInfo = styled.p`
  font-size: 1.25rem;
  margin: 20px 0;
`;

const EmailLink = styled.a`
  color: #00ff99; /* Neon green or any color you prefer */
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Note = styled.p`
  font-size: 1rem;
  color: #999; /* Light gray or any color you prefer for the note */
  margin-top: 10px;
`;

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <ContactInfo>
        You can reach me via email at:  
        <EmailLink href="mailto:avirald20@outlook.com">
          avirald20@outlook.com
        </EmailLink>
      </ContactInfo>
      <Note>
        Feel free to email me regarding anything!
      </Note>
    </ContactContainer>
  );
};

export default ContactSection;
