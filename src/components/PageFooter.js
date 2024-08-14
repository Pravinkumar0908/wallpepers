import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => (
  <FooterSection id="contact">
    <FooterGrid>
      <FooterColumn>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>Resources</h3>
        <ul>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#tutorials">Tutorials</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>Connect With Us</h3>
        <p><FaEnvelope /> hello@imagevideohub.com</p>
        <p><FaPhone /> +1 (555) 123-4567</p>
      </FooterColumn>
    </FooterGrid>
    <Copyright>
      © 2024 ImageVideoHub. Empowering creativity worldwide.
    </Copyright>
  </FooterSection>
);

const FooterSection = styled.footer`
  background-color: #333;
  color: white;
  padding: 50px 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

const FooterColumn = styled.div`
  h3 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #555;
`;

export default Footer;