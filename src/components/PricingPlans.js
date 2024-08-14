import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaDollarSign } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pricingData = [
  {
    name: "Basic",
    price: 9.99,
    features: [
      "100 downloads/month",
      "Standard quality content",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: 19.99,
    features: [
      "Unlimited downloads",
      "High quality content",
      "Priority support",
      "Advanced search"
    ]
  },
  {
    name: "Enterprise",
    price: 49.99,
    features: [
      "Unlimited downloads",
      "Highest quality content",
      "Dedicated account manager",
      "API access"
    ]
  }
];

const Pricing = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (index === 1) { // Center card index
        gsap.fromTo(card, 
          { scale: 1 }, 
          {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 60%',
              end: 'top 40%',
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          });
      }
    });
  }, []);

  return (
    <PricingSection id="pricing">
      <SectionTitle>Choose Your Plan</SectionTitle>
      <PricingGrid>
        {pricingData.map((plan, index) => (
          <PricingCard 
            key={index} 
            ref={el => cardRefs.current[index] = el}
            isCenter={index === 1} // Pass isCenter prop to identify the center card
          >
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>
              <FaDollarSign />
              {plan.price}
              <span>/month</span>
            </PlanPrice>
            <PlanFeatures>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </PlanFeatures>
            <PlanButton>Choose Plan</PlanButton>
          </PricingCard>
        ))}
      </PricingGrid>
    </PricingSection>
  );
};

const PricingSection = styled.section`
  padding: 100px 20px;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const PricingCard = styled.div`
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  transform: ${({ isCenter }) => (isCenter ? 'scale(1.05)' : 'scale(1)')};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #6e8efb;
  margin-bottom: 20px;

  span {
    font-size: 1rem;
    color: #666;
  }
`;

const PlanFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;

  li {
    margin-bottom: 10px;
    color: #666;
  }
`;

const PlanButton = styled.button`
  background-color: #6e8efb;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a777e3;
    transform: translateY(-3px);
  }
`;

export default Pricing;
