import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBars, FaTimes, FaHome, FaImage, FaVideo, FaInfoCircle, FaUserCircle } from 'react-icons/fa';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: #ff6b6b;
  cursor: pointer;
`;

const NavItems = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.a)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SearchContainer = styled(motion.div)`
  position: relative;
  width: 200px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled(motion.input)`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
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

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const MobileMenuItem = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const UniqueNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement search functionality here
  };

  return (
    <>
      <NavbarContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <NavContent>
          <Logo href="home" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            VisualVault
          </Logo>
          <NavItems>
            <NavItem href="home" whileHover={{ scale: 1.1 }} >Home</NavItem>
            <NavItem href="images" whileHover={{ scale: 1.1 }}>Images</NavItem>
            <NavItem href="VideoGallery" whileHover={{ scale: 1.1 }}>Videos</NavItem>
            <NavItem href="about" whileHover={{ scale: 1.1 }}> About</NavItem>
            <NavItem href="profile" whileHover={{ scale: 1.1 }}> Profile</NavItem>
          </NavItems>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
            />
            <SearchIcon />
          </SearchContainer>
          <MobileMenuButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars />
          </MobileMenuButton>
        </NavContent>
      </NavbarContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </CloseButton>
            <MobileMenuItem href="home" whileHover={{ scale: 1.1 }}><FaHome /> Home</MobileMenuItem>
            <MobileMenuItem href="images" whileHover={{ scale: 1.1 }}><FaImage /> Images</MobileMenuItem>
            <MobileMenuItem href="VideoGallery" whileHover={{ scale: 1.1 }}><FaVideo /> Videos</MobileMenuItem>
            <MobileMenuItem href="about" whileHover={{ scale: 1.1 }}><FaInfoCircle /> About</MobileMenuItem>
            <MobileMenuItem href="profile" whileHover={{ scale: 1.1 }}><FaUserCircle /> Profile</MobileMenuItem>
            <SearchContainer style={{ display: 'block', margin: '1rem 0' }}>
              <SearchInput
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
              />
              <SearchIcon />
            </SearchContainer>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default UniqueNavbar;