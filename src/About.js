import styled from 'styled-components';
import my_image from "./assets/me.jpg"
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  color: #fff;
  font-family: 'Press Start 2P', cursive;
  min-height: 100vh; /* Ensures the section takes up at least the full height of the viewport */
  box-sizing: border-box;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  margin-left: 20px; /* Adjust as needed */
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 350px;
  height: 350px;
  object-fit: cover;
  /* Removed border and box-shadow */
  margin-bottom: 1.5rem;
  margin-top: 50px; /* Move image down */
  transform: translateX(100px); /* Move image slightly to the right */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ff007f; 
  text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px; /* Adjust as needed */
  color: #ccc; /* Light gray for readability */
`;

const AboutMe = () => (
  <AboutSection>
    <ProfileContainer>
      <ProfileImage src={my_image} alt="Profile" />
    </ProfileContainer>
    <TextContainer>
      <Heading>About Me</Heading>
      <Paragraph>
        Hi, I'm Avi, a high school student based in India. I'm particularly interested in physics, math, and computer science. I love cosmology and everything that comes with it, and using computational methods to solve physics problems. I also enjoy making websites in my free time. Also a huge Formula 1 fan.
      </Paragraph>
    </TextContainer>
  </AboutSection>
);

export default AboutMe;
