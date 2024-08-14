import React from 'react';
import styled from 'styled-components';

const Team = () => (
  <TeamSection id="team">
    <SectionTitle>The Minds Behind the Magic</SectionTitle>
    <TeamGrid>
      <TeamMember>
        <img src="https://i.imgur.com/7Xc7T7H.jpg" alt="Emma Watson" />
        <h3>Emma Watson</h3>
        <p>Visionary & CEO</p>
      </TeamMember>
      <TeamMember>
        <img src="https://i.imgur.com/1NKlgGp.jpg" alt="David Kim" />
        <h3>David Kim</h3>
        <p>Head of Content Curation</p>
      </TeamMember>
      <TeamMember>
        <img src="https://i.imgur.com/Q9qFt3m.jpg" alt="Zoe Rodriguez" />
        <h3>Zoe Rodriguez</h3>
        <p>Chief Technology Officer</p>
      </TeamMember>
    </TeamGrid>
  </TeamSection>
);

const TeamSection = styled.section`
  padding: 100px 20px;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const TeamMember = styled.div`
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default Team;