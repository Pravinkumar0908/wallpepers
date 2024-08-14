import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Branding = () => {
  const brandingRef = useRef(null);

  useEffect(() => {
    const brandingElement = brandingRef.current;

    // GSAP animation for scrolling
    gsap.to('.branding-slider', {
      x: '-50%',
      ease: 'linear',
      duration: 5, // Adjust duration as needed for speed
      repeat: -2,
    });

    gsap.fromTo(
      brandingElement,
      { opacity: 0, x: '-100%' },
      {
        opacity: 1,
        x: '0%',
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: brandingElement,
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );
  }, []);

  const logos = [
    "https://pngimg.com/uploads/google/google_PNG19624.png",
    "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-1987-2011.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnr3Dunl3mDM7jRrUz8PBGlVRbQZbGfDCfKQ&s",
    "https://cdn-icons-png.flaticon.com/512/23/23346.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8CTvku1oJtbbKr8phZAIIZ6qASNE3B6O-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGT044iyF07gucwVOctEekfASmTzr0gWgqDQ&s",
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Vimeo_logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0g0DiuGYH7SRR277mwdKrLrxM9CAppXF49w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkby673A1-0kCoOjDRWzrbtAwcNOcuOT7XwQ&s",

    // Add more URLs as needed
  ];

  return (
    <div 
      style={{
        overflow: 'hidden',
        width: '100%',
        backgroundColor: 'transparent',
        padding: '20px 0',
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
      ref={brandingRef}
    >
      <div 
        className="branding-slider"
        style={{
          display: 'flex',
          gap: '40px',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'max-content',
          mixBlendMode: 'color-burn'
        }}
      >
        {logos.map((logo, index) => (
          <img 
            key={index}
            src={logo} 
            alt={`Logo ${index + 1}`}
            style={{
              width: '120px',
              height: '80px',
              objectFit: 'contain',
              filter: 'grayscale(100%)',
              transition: 'filter 0.5s ease',
            }}
          />
        ))}
        {/* Duplicating logos for infinite scroll effect */}
        {logos.map((logo, index) => (
          <img 
            key={`dup-${index}`}
            src={logo} 
            alt={`Logo duplicate ${index + 1}`}
            style={{
              width: '120px',
              height: '80px',
              objectFit: 'contain',
              filter: 'grayscale(100%)',
              transition: 'filter 0.5s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Branding;
