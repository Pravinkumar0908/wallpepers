// src/components/About.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #4CAF50;
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #6e45e2;
`;

const SectionParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #666;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const SectionContent = styled(motion.div)`
  width: 48%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: #4CAF50;
  font-weight: bold;
`;

const Wave = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: url('https://svgshare.com/i/_t7.svg') repeat-x;
`;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <AboutContainer>
      <SectionTitle data-aos="fade-up">About Us</SectionTitle>

      <SectionContainer>
        <SectionContent
          data-aos="fade-right"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionSubtitle>Our Mission</SectionSubtitle>
          <SectionParagraph>
            Our mission is to provide high-quality, royalty-free stock images and videos to creators around the world. We aim to make the creative process easier and more accessible by offering a diverse collection of visual content that suits all your needs.
          </SectionParagraph>
        </SectionContent>
        <SectionContent
          data-aos="fade-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionImage
            src="https://images.unsplash.com/photo-1506719040632-7e59d793f499?ixlib=rb-4.0.3&auto=format&fit=crop&w=750&q=80"
            alt="Our Mission"
          />
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionContent
          data-aos="fade-right"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionImage
            src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=750&q=80"
            alt="Our Vision"
          />
        </SectionContent>
        <SectionContent
          data-aos="fade-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionSubtitle>Our Vision</SectionSubtitle>
          <SectionParagraph>
            We envision a world where creativity knows no bounds. Our platform is designed to empower creators, providing them with the tools and resources to turn their ideas into reality. We believe that everyone should have access to beautiful, high-quality content without restrictions.
          </SectionParagraph>
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionContent
          data-aos="fade-right"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionSubtitle>Why Choose Us?</SectionSubtitle>
          <SectionParagraph>
            At the heart of our platform is a commitment to quality and diversity. We offer a wide range of categories, from nature and architecture to abstract art and technology. Our collection is constantly updated to ensure that you have access to the latest trends in visual content.
          </SectionParagraph>
        </SectionContent>
        <SectionContent
          data-aos="fade-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionImage
            src="https://images.unsplash.com/photo-1563201517-e70c19ede18d?ixlib=rb-4.0.3&auto=format&fit=crop&w=750&q=80"
            alt="Why Choose Us"
          />
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionContent
          data-aos="fade-right"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionImage
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=750&q=80"
            alt="Our Team"
          />
        </SectionContent>
        <SectionContent
          data-aos="fade-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionSubtitle>Meet Our Team</SectionSubtitle>
          <SectionParagraph>
            Our team is a diverse group of passionate individuals dedicated to making your creative journey as seamless as possible. From curating content to providing customer support, we are here to help you every step of the way.
          </SectionParagraph>
        </SectionContent>
      </SectionContainer>

      <Wave />
    </AboutContainer>
  );
};

export default About;
