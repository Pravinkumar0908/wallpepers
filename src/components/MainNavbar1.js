import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const SearchBar = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.5rem 1rem;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: white;
  outline: none;
  width: 200px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SearchButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement your search functionality here
  };

  return (
    <NavbarContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      style={{ background: isScrolled ? 'rgba(255, 107, 107, 0.9)' : 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}
    >
      <Logo
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ImageVid
      </Logo>
      <NavLinks>
        <NavLink href="#" whileHover={{ scale: 1.1 }}>Home</NavLink>
        <NavLink href="#" whileHover={{ scale: 1.1 }}>Images</NavLink>
        <NavLink href="#" whileHover={{ scale: 1.1 }}>Videos</NavLink>
        <NavLink href="#" whileHover={{ scale: 1.1 }}>About</NavLink>
      </NavLinks>
      <SearchBar
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 'auto' }}
        transition={{ duration: 0.5 }}
      >
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSearch}
        >
          🔍
        </SearchButton>
      </SearchBar>
      <MobileMenuButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ☰
      </MobileMenuButton>
    </NavbarContainer>
  );
};

export default Navbar;