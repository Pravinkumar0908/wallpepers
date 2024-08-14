import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars } from 'react-icons/fa';

// Keyframes for animations
const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const neonGlow = keyframes`
  0% {
    text-shadow: 0 0 5px #6e8efb, 0 0 10px #6e8efb, 0 0 20px #6e8efb, 0 0 30px #5282ff, 0 0 40px #5282ff, 0 0 50px #5282ff, 0 0 60px #5282ff;
  }
  100% {
    text-shadow: 0 0 10px #5282ff, 0 0 20px #6e8efb, 0 0 30px #6e8efb, 0 0 40px #6e8efb, 0 0 50px #6e8efb, 0 0 60px #6e8efb, 0 0 70px #6e8efb;
  }
`;

const MainNavbar = ({ isMenuOpen, setIsMenuOpen }) => (
  <NavbarContainer>
    <NavLogo>ImageVideoHub</NavLogo>
    <NavLinks isOpen={isMenuOpen}>
      {["Home", "Features", "Gallery", "Testimonials", "Team", "FAQ", "Pricing", "Contact"].map((link) => (
        <NavLink href={`#${link.toLowerCase()}`} key={link}>
          {link}
        </NavLink>
      ))}
    </NavLinks>
    <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <FaBars />
    </MenuButton>
  </NavbarContainer>
);

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 25, 0.95);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  animation: ${slideDown} 0.6s ease-out forwards;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6e8efb;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  animation: ${fadeIn} 0.8s ease forwards, ${neonGlow} 1.5s alternate infinite;

  &:hover {
    color: #f39c12;
    transition: color 0.3s ease;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #0a0a19;

    display: ${props => props.isOpen ? 'flex' : 'none'};
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    animation: ${fadeIn} 0.5s ease forwards;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #ddd;
  font-weight: 700;
  font-size: 1.1rem;
  position: relative;
  hieght: 600px;
  transition: color 0.3s ease, transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #6e8efb, #f39c12);
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #f39c12;
    transform: translateY(-4px);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;


    &:hover {
      transform: none;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #f39c12;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease forwards;

  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #e74c3c;
    transform: rotate(90deg);
    transition: transform 0.3s ease, color 0.3s ease;
  }
`;

export default MainNavbar;
