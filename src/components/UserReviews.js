import React from 'react';
import styled from 'styled-components';

const Testimonials = () => (
  <TestimonialsSection id="testimonials">
    <SectionTitle>What Our Community Says</SectionTitle>
    <TestimonialGrid>
      <Testimonial>
        <p>"This platform has revolutionized my creative workflow. The quality and variety are unmatched!"</p>
        <h4>- Alex Chen, Digital Artist</h4>
      </Testimonial>
      <Testimonial>
        <p>"From stunning landscapes to cutting-edge tech videos, I find everything I need for my projects here."</p>
        <h4>- Samantha Lee, Film Producer</h4>
      </Testimonial>
      <Testimonial>
        <p>"The smart search feature saves me hours. It's like having a personal media curator at my fingertips."</p>
        <h4>- Marcus Johnson, Content Strategist</h4>
      </Testimonial>
    </TestimonialGrid>
  </TestimonialsSection>
);

const TestimonialsSection = styled.section`
  padding: 100px 20px;
  background-color: #a777e3;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #fff;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const Testimonial = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  font-style: italic;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export default Testimonials;