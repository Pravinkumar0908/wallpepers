import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const API_KEY = 'HQNcjdA6J4eqytIKvCwDxO2Q3eRQfNFT0y66FzyPIntI2irxtfgDyZS4';

const Section = styled.div`
margin: 100px;

`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const SearchList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SearchItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4CAF50;
    color: white;
  }
`;

const TrendingSearches = () => {
  const [trendingSearches, setTrendingSearches] = useState([]);

  useEffect(() => {
    const fetchTrendingSearches = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search?query=trending&per_page=10', {
          headers: { Authorization: API_KEY }
        });
        setTrendingSearches(response.data.photos.map(photo => photo.photographer));
      } catch (error) {
        console.error('Error fetching trending searches:', error);
      }
    };

    fetchTrendingSearches();
  }, []);

  return (
    <Section>
      <Title>Trending Searches</Title>
      <SearchList>
        {trendingSearches.map((search, index) => (
          <SearchItem key={index}>{search}</SearchItem>
        ))}
      </SearchList>
    </Section>
  );
};

export default TrendingSearches;
