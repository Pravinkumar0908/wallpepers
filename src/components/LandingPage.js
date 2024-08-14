import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from './TopNav';
import HeroSection from './HeroSection';
import HighlightFeatures from './HighlightFeatures';
import ImageShowcase from './ImageShowcase';
import UserReviews from './UserReviews';
import TeamSpotlight from './TeamSpotlight';
import FAQAccordion from './FAQAccordion';
import PricingPlans from './PricingPlans';
import PageFooter from './PageFooter';
import BrandHighlight from './BrandHighlight';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <LandingPageWrapper>
      <TopNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection handleLoginClick={handleLoginClick} />
      <HighlightFeatures />
      <ImageShowcase />
      <UserReviews />
      <BrandHighlight />
      <TeamSpotlight />
      <FAQAccordion />
      <PricingPlans />
      <PageFooter />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
`;

export default LandingPage;