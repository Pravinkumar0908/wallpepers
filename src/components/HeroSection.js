import React, { useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDownload, FaPlay, FaChevronDown } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import lottie from 'lottie-web';
import animationData from '../animations/Animation1723430965762.json'; 

const Header = ({ handleClick }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <HeaderSection id="home">
      <ParticlesBackground
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
     
      <HeaderContent>
        <LottieWrapper ref={lottieRef} /> 
        <HeaderTitle>Discover, Download, Create</HeaderTitle>
        <HeaderSubtitle>
          Your gateway to premium <ImgSpan>images and videos</ImgSpan>
        </HeaderSubtitle>
        <HeaderDescription>
          Unlock a world of high-quality visuals for your creative projects.
          Access millions of stunning images and videos, curated just for you.
        </HeaderDescription>
        <HeaderCTA>
          <HeaderButton onClick={handleClick}>
            Get Started <FaDownload />
          </HeaderButton>
          <HeaderDemoButton>
            Watch Demo <FaPlay />
          </HeaderDemoButton>
        </HeaderCTA>
      </HeaderContent>
      <HeaderStats>
        <StatItem>
          <StatNumber>10M+</StatNumber>
          <StatLabel>Images</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>1M+</StatNumber>
          <StatLabel>Videos</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>500K+</StatNumber>
          <StatLabel>Happy Users</StatLabel>
        </StatItem>
      </HeaderStats>
      <ScrollDownIndicator>
        <FaChevronDown />
        <span>Scroll to explore</span>
      </ScrollDownIndicator>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  text-align: center;
  padding: 100px 20px 60px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 80px 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 60px 20px 30px;
  }
`;

const ParticlesBackground = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;



const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
  padding: 0 20px;

  @media (max-width: 768px) {
    max-width: 90%;
margin-top: 100px;

  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const LottieWrapper = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  margin-left: -30px;
  margin-top: -20px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-left: -20px;
    margin-top: -15px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-left: -15px;
    margin-top: -10px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeaderSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ImgSpan = styled.span`
  color: cyan;
  font-weight: 600;
`;

const HeaderDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const HeaderCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const HeaderButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #ff8787;
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const HeaderDemoButton = styled(HeaderButton)`
  background-color: transparent;
  border: 2px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const HeaderStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    flex-direction: column;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ScrollDownIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 45%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    font-size: 1rem;
    bottom: 20px;
  left: 35%;

  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    bottom: 10px;
  }
`;

export default Header;
