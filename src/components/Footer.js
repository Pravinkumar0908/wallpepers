// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled(motion.footer)`
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.2);
`;

const FooterTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #fff;
`;

const FooterText = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.5;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: white;
  font-size: 2rem;
  transition: color 0.3s ease;
  &:hover {
    color: #ffdd59;
  }
`;

const FooterLinks = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FooterLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: #ffdd59;
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: url('https://svgshare.com/i/_t7.svg') repeat-x;
  transform: rotate(180deg);
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FooterTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Stay Connected
      </FooterTitle>
      <FooterText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Follow us on our social media channels and stay updated with the latest trends and special offers.
      </FooterText>
      <SocialIcons>
        <SocialIcon
          href="https://facebook.com"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook />
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter />
        </SocialIcon>
        <SocialIcon
          href="https://instagram.com"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </SocialIcon>
        <SocialIcon
          href="https://linkedin.com"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </SocialIcon>
      </SocialIcons>
      <FooterLinks>
        <FooterLink
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About Us
        </FooterLink>
        <FooterLink
          href="#services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Services
        </FooterLink>
        <FooterLink
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </FooterLink>
        <FooterLink
          href="#privacy"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Privacy Policy
        </FooterLink>
      </FooterLinks>
      <Wave />
    </FooterContainer>
  );
};

export default Footer;
