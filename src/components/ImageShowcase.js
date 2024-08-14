import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import animationData from '../animations/Animation1723430965762.json'; 
import animationData1 from '../animations/Animation1723019811149.json'; 

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const lottieRef1 = useRef(null);
  const lottieRef2 = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    if (lottieRef1.current) {
      const animation1 = lottie.loadAnimation({
        container: lottieRef1.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData: animationData, // Use the first imported JSON data
      });

      ScrollTrigger.create({
        trigger: lottieRef1.current,
        start: 'top 80%',
        end: 'top 40%',
        onEnter: () => animation1.play(),
        onLeave: () => animation1.pause(),
        onEnterBack: () => animation1.play(),
        onLeaveBack: () => animation1.pause(),
      });

      return () => {
        animation1.destroy(); // Clean up the animation when the component is unmounted
      };
    }

    if (lottieRef2.current) {
      const animation2 = lottie.loadAnimation({
        container: lottieRef2.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData: animationData1, // Use the second imported JSON data
      });

      ScrollTrigger.create({
        trigger: lottieRef2.current,
        start: 'top 70%',
        end: 'top 30%',
        onEnter: () => animation2.play(),
        onLeave: () => animation2.pause(),
        onEnterBack: () => animation2.play(),
        onLeaveBack: () => animation2.pause(),
      });

      return () => {
        animation2.destroy(); // Clean up the animation when the component is unmounted
      };
    }

    if (waveRef.current) {
      gsap.fromTo(waveRef.current, 
        { y: 0 }, 
        { 
          y: 50, 
          ease: 'power1.inOut', 
          scrollTrigger: {
            trigger: waveRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }
  }, []);

  return (
    <GallerySection id="gallery">
      <SectionTitle>Explore Our Gallery</SectionTitle>
      
      <LottieWrapper ref={lottieRef1} />
      
      <WaveWrapper ref={waveRef}>
        <WaveSVG viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C200,100 400,-100 600,0 C800,100 1000,-100 1200,0 L1200,120 L0,120 Z" />
        </WaveSVG>
      </WaveWrapper>

      <GalleryGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <GalleryImage
            key={index}
            src={`https://picsum.photos/400/300?random=${index}`}
            alt={`Gallery image ${index}`}
          />
        ))}
      </GalleryGrid>

      <LottieWrapper ref={lottieRef2} />
    </GallerySection>
  );
};

const GallerySection = styled.section`
  padding: 100px 20px;
  background-color: #fff;
  position: relative; /* Ensures Lottie animations and wave are positioned relative to this section */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const LottieWrapper = styled.div`
  width: 100px;
  max-width: 100px;
  margin: 0 auto;
  position: relative;
  height: 100px; /* Ensure the height is set to properly display animations */
`;

const WaveWrapper = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1; /* Ensures it does not overlap content */
`;

const WaveSVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: #6e8efb;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export default Gallery;
