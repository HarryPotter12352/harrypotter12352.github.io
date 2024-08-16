import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.nav`
  background-color: black;
  color: white;
  font-family: 'Press Start 2P', cursive;
  padding: 15px 30px; /* Increased padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;

const NavbarLogo = styled.h1`
  font-size: 1.5rem; /* Adjusted font size */
  margin: 0;
  text-shadow: 1px 1px #ff0000, 2px 2px #00ff00, 3px 3px #0000ff;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 20px; /* Adjusted gap */
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: 1rem; /* Adjusted font size */
  text-decoration: none;
  position: relative;

  &:hover {
    color: #00ff99;
    cursor: pointer; 

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 2px;
      background-color: #00ff99;
      animation: underlineAnimation 0.3s ease-in-out;
    }
  }

  @keyframes underlineAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>Aviral Damle</NavbarLogo>
      <NavbarLinks>
        <NavbarLink to="hero" smooth={true} duration={500}>Home</NavbarLink>
        <NavbarLink to="experience" smooth={true} duration={500}>Experience</NavbarLink>
        <NavbarLink to="publications" smooth={true} duration={500}>Publications</NavbarLink>
        <NavbarLink to="contact" smooth={true} duration={500}>Contact</NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
