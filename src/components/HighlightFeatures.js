import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaImage, FaVideo, FaCloud, FaSearch } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);
  const popupRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const features = featuresRef.current;
    const popup = popupRef.current;

    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    });

    features.forEach((feature, index) => {
      gsap.from(feature, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: feature,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });
    });

    gsap.from(popup, {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        onEnter: () => gsap.to(popup, { opacity: 1, scale: 1, duration: 0.5 }),
        onLeave: () => gsap.to(popup, { opacity: 0, scale: 0.5, duration: 0.5 }),
        onEnterBack: () => gsap.to(popup, { opacity: 1, scale: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(popup, { opacity: 0, scale: 0.5, duration: 0.5 }),
      },
    });
  }, []);

  return (
    <FeaturesSection id="features" ref={sectionRef}>
      <SectionTitle>Unparalleled Features</SectionTitle>
      <FeatureGrid>
        <Feature ref={el => featuresRef.current[0] = el}>
          <FeatureIcon><FaImage /></FeatureIcon>
          <FeatureContent>
            <h3>Stunning Imagery</h3>
            <p>Access a vast library of high-resolution photos</p>
          </FeatureContent>
        </Feature>
        <Feature ref={el => featuresRef.current[1] = el}>
          <FeatureIcon><FaVideo /></FeatureIcon>
          <FeatureContent>
            <h3>4K Video Content</h3>
            <p>Download cinematic quality videos for your projects</p>
          </FeatureContent>
        </Feature>
        <Feature ref={el => featuresRef.current[2] = el}>
          <FeatureIcon><FaCloud /></FeatureIcon>
          <FeatureContent>
            <h3>Cloud Storage</h3>
            <p>Securely store and access your downloads anywhere</p>
          </FeatureContent>
        </Feature>
        <Feature ref={el => featuresRef.current[3] = el}>
          <FeatureIcon><FaSearch /></FeatureIcon>
          <FeatureContent>
            <h3>Smart Search</h3>
            <p>Find the perfect content with our AI-powered search</p>
          </FeatureContent>
        </Feature>
      </FeatureGrid>
      <Popup ref={popupRef}>
        <h4>Amazing Features!</h4>
        <p>Discover the power of our platform</p>
      </Popup>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background-color: #f8f9fa;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const Feature = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #6e8efb;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  ${Feature}:hover & {
    transform: scale(1.2) rotate(360deg);
  }
`;

const FeatureContent = styled.div`
  h3 {
    margin-bottom: 10px;
    transition: all 0.3s ease;
  }

  p {
    color: #666;
    transition: all 0.3s ease;
  }

  ${Feature}:hover & {
    h3 {
      color: #6e8efb;
    }

    p {
      color: #333;
    }
  }
`;

const Popup = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #6e8efb;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default Features;