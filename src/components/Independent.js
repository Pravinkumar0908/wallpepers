import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import flagImage from '../assets/flag.png';
import mapImage from '../assets/map.png';
import ashokChakraImage from '../assets/chkara.png';
import tajMahalImage from '../assets/tajmahal.png';
import indiaGateImage from '../assets/indiagate.png';
import soldierImage from '../assets/solder.png';
import jetImage from '../assets/jet.png';
import birdImage from '../assets/bird.png';
import redfortImage from '../assets/redfort1.png';
import tankImage from '../assets/tank.png';

const waveFlag = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #FF9933, #FFFFFF, #138808);
  font-family: 'Poppins', sans-serif;
  color: #FFFFFF;
  position: relative;
`;

const Flag = styled.img`
  width: 30vw;
  max-width: 300px;
  position: absolute;
  top: 5vh;
  left: 41%;
  transform: translateX(-50%);
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
  animation: ${waveFlag} 3s ease-in-out infinite;
`;

const Map = styled.img`
  width: 50vw;
  max-width: 500px;
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
  mix-blend-mode: color-burn;
`;

const Countdown = styled.div`
  position: absolute;
  top: 35vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3vw;
  text-align: center;
  color: orange;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

const Message = styled.h1`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4vw;
  text-align: center;
  white-space: nowrap;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

const AshokChakra = styled.img`
  position: absolute;
  width: 15vw;
  max-width: 150px;
  top: 39.5%;
  left: 45%;
  transform: translate(-50%, -50%);
  animation: ${rotate} 10s linear infinite;
`;

const Monument = styled.img`
  position: absolute;
  width: 20vw;
  max-width: 200px;
  bottom: 0;
  opacity: 0.7;

  @media (max-width: 768px) {
    width: 25vw;
  }
`;

const TajMahal = styled(Monument)`
  left: 15vw;
  max-width: 450px;
  height: 90px;
`;

const Redfort = styled(Monument)`
  right: 40vw;
  width: 550px;
  height: 90px;
`;

const IndiaGate = styled(Monument)`
  max-width: 190px;
  right: 12vw;
`;

const Soldier = styled.img`
  position: absolute;
  width: 400px;
  max-width: 250px;
  bottom: 0;
  left: -4vw;

  @media (max-width: 768px) {
    width: 20vw;
  }
`;

const Soldier1 = styled.img`
  position: absolute;
  width: 400px;
  max-width: 250px;
  bottom: 0;
  right: -4vw;

  @media (max-width: 768px) {
    width: 20vw;
  }
`;

const MusicToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(255,255,255,0.7);
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;

const Firework = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

const Tank = styled.img`
  position: absolute;
  width: 100px;
  bottom: 0;
`;

const Independent = () => {
    const [countdown, setCountdown] = useState('');
    const [musicPlaying, setMusicPlaying] = useState(false);
    const containerRef = useRef(null);
    const audioRef = useRef(null);
    const clickCountRef = useRef(0);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const target = new Date(now.getFullYear(), 7, 15);
            if (now > target) target.setFullYear(target.getFullYear() + 1);

            const diff = target - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s\nuntil Independence Day`);
        };

        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    useEffect(() => {
        const createFirework = () => {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.width = '5px';
            firework.style.height = '5px';
            firework.style.borderRadius = '50%';
            firework.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            containerRef.current.appendChild(firework);

            gsap.set(firework, {
                x: Math.random() * window.innerWidth,
                y: window.innerHeight,
            });

            gsap.to(firework, {
                duration: 2,
                y: Math.random() * window.innerHeight / 2,
                ease: "power1.out",
                onComplete: () => {
                    gsap.to(firework, {
                        duration: 0.5,
                        opacity: 0,
                        scale: 3,
                        onComplete: () => firework.remove()
                    });
                }
            });
        };

        const createGulal = () => {
            const gulal = document.createElement('div');
            gulal.style.position = 'absolute';
            gulal.style.width = '10px';
            gulal.style.height = '10px';
            gulal.style.borderRadius = '50%';
            gulal.style.backgroundColor = ['#FF9933', '#FFFFFF', '#138808'][Math.floor(Math.random() * 3)];
            containerRef.current.appendChild(gulal);

            gsap.set(gulal, {
                x: Math.random() * window.innerWidth,
                y: -20,
            });

            gsap.to(gulal, {
                duration: 4,
                y: window.innerHeight + 20,
                x: `+=${(Math.random() - 0.5) * 200}`,
                rotation: Math.random() * 360,
                ease: "none",
                onComplete: () => gulal.remove()
            });
        };

        const createJet = () => {
            const jet = document.createElement('img');
            jet.src = jetImage;
            jet.style.position = 'absolute';
            jet.style.width = '40vw';
            jet.style.maxWidth = '200px';

            containerRef.current.appendChild(jet);

            const startPositions = [
                { x: -100, y: Math.random() * window.innerHeight },
                { x: window.innerWidth + 100, y: Math.random() * window.innerHeight },
                { x: Math.random() * window.innerWidth, y: -100 },
                { x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }
            ];

            const startPos = startPositions[Math.floor(Math.random() * startPositions.length)];
            const endPos = {
                x: window.innerWidth - startPos.x,
                y: window.innerHeight - startPos.y
            };

            // Calculate angle for jet rotation
            const angle = Math.atan2(endPos.y - startPos.y, endPos.x - startPos.x) * (180 / Math.PI);

            gsap.fromTo(jet,
                { 
                    x: startPos.x, 
                    y: startPos.y, 
                    scale: 0.5,
                    rotation: angle // Set initial rotation
                },
                {
                    duration: 10,
                    x: endPos.x,
                    y: endPos.y,
                    ease: "power1.inOut",
                    onUpdate: () => createSmokeTrail(jet),
                    onComplete: () => jet.remove()
                }
            );
        };

        const createSmokeTrail = (jet) => {
          const smoke = document.createElement('div');
          smoke.style.position = 'absolute';
          smoke.style.width = '30px';
          smoke.style.height = '30px';
          smoke.style.borderRadius = '50%';
          smoke.style.background = `
              radial-gradient(circle at 20% 20%, 
                rgb(255, 128, 0) 0%, 
                rgb(255, 128, 0) 60%,
                rgba(255, 255, 255, 0) 60%, 
                rgba(21, 255, 0) 60%,  
                  rgba(21, 255, 0) 100%
              )
          `;
          smoke.style.mixBlendMode = 'screen';
          
          containerRef.current.appendChild(smoke);
          
          const jetRect = jet.getBoundingClientRect();
          gsap.set(smoke, {
              x: jetRect.x + jetRect.width / 2,
              y: jetRect.y + jetRect.height / 2,
          });
          
          gsap.to(smoke, {
              duration: 4,
              x: '-=100',
              y: '+=50',
              scale: 5,
              opacity: 0,
              ease: "power1.out",
              onComplete: () => smoke.remove()
          });
      };

        const createBird = () => {
            const bird = document.createElement('img');
            bird.src = birdImage;
            bird.style.position = 'absolute';
            bird.style.width = '40vw';
            bird.style.maxWidth = '200px';

            containerRef.current.appendChild(bird);

            const startX = -50;
            const endX = window.innerWidth + 50;
            const y = Math.random() * (window.innerHeight / 3);

            gsap.fromTo(bird,
                { x: startX, y: y, scale: 0.3 },
                {
                    duration: 10,
                    x: endX,
                    y: y + Math.sin(y) * 50,
                    ease: "power1.inOut",
                    onComplete: () => bird.remove()
                }
            );
        };

        const createTank = () => {
            const tank = document.createElement('img');
            tank.src = tankImage;
            tank.style.position = 'absolute';
            tank.style.width = '100px';
            tank.style.bottom = '0';
            containerRef.current.appendChild(tank);

            const startX = -100;
            const endX = window.innerWidth + 100;

            gsap.fromTo(tank,
                { x: startX },
                {
                    duration: 20,
                    x: endX,
                    ease: "none",
                    onUpdate: () => {
                        if (Math.random() < 0.05) {
                            createTankFire(tank);
                        }
                    },
                    onComplete: () => tank.remove()
                }
            );
        };

        const createTankFire = (tank) => {
            const fire = document.createElement('div');
            fire.style.position = 'absolute';
            fire.style.width = '20px';
            fire.style.height = '20px';
            fire.style.borderRadius = '50%';
            fire.style.background = 'radial-gradient(circle, rgba(255,156,0,1) 0%, rgba(255,0,0,1) 100%)';
            containerRef.current.appendChild(fire);

            const tankRect = tank.getBoundingClientRect();
            gsap.set(fire, {
                x: tankRect.x + tankRect.width,
                y: tankRect.y,
            });

            gsap.to(fire, {
                duration: 1,
                x: '+=100',
                y: '-=50',
                scale: 3,
                opacity: 0,
                ease: "power1.out",
                onComplete: () => fire.remove()
            });
        };

        const fireworkInterval = setInterval(createFirework, 500);
        const gulalInterval = setInterval(createGulal, 100);
        const jetInterval = setInterval(createJet, 7000);
        const birdInterval = setInterval(createBird, 5000);
        const tankInterval = setInterval(createTank, 15000);

        return () => {
            clearInterval(fireworkInterval);
            clearInterval(gulalInterval);
            clearInterval(jetInterval);
            clearInterval(birdInterval);
            clearInterval(tankInterval);
        };
    }, []);

    const handleClick = () => {
        clickCountRef.current += 1;
        if (clickCountRef.current === 15) {
            alert("Jai Hind! You've unlocked a secret message. India is not just a country, it's an emotion!");
            clickCountRef.current = 0;
        }
    };

    const toggleMusic = () => {
      if (musicPlaying) {
          audioRef.current.pause();
      } else {
          audioRef.current.play();
      }
      setMusicPlaying(!musicPlaying);
  };

  return (
      <Container ref={containerRef} onClick={handleClick}>
          <Flag src={flagImage} alt="Indian Flag" />
          <Map src={mapImage} alt="India Map" />
          <Countdown>{countdown}</Countdown>
          <Message>Happy Independence Day All Indians</Message>
          <AshokChakra src={ashokChakraImage} alt="Ashok Chakra" />
          <TajMahal src={tajMahalImage} alt="Taj Mahal" />
          <Redfort src={redfortImage} alt="Red Fort" />
          <IndiaGate src={indiaGateImage} alt="India Gate" />
          <Soldier src={soldierImage} alt="Indian Soldier" />
          <Soldier1 src={soldierImage} alt="Indian Soldier" />
          <MusicToggle onClick={toggleMusic}>
              {musicPlaying ? '🔇 Mute Music' : '🎵 Play Music'}
          </MusicToggle>
          <audio ref={audioRef} loop>
              <source src="https://example.com/vande-mataram.mp3" type="audio/mpeg" />
          </audio>
      </Container>
  );
};

export default Independent;