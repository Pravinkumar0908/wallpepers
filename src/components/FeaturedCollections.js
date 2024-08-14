import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Replace with your Pixabay API key
const PIXABAY_API_KEY = '35264620-3ea2afb032306dd15ad5f8eef';

const CollectionContainer = styled.div`
  max-width: 1600px;
  padding: 2rem;
`;

const CollectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const CollectionItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

const CollectionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;



const FeaturedCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=popular&image_type=photo&per_page=20`);

        // Check the structure of the response
        console.log(response.data);

        // Setting the data fetched from Pixabay API
        setCollections(response.data.hits || []);
      } catch (error) {
        console.error('Error fetching collections from Pixabay:', error);
        setCollections([]);
      }
    };

    fetchCollections();
  }, []);

  return (
    <CollectionContainer>
      <CollectionTitle>Featured Collections</CollectionTitle>
      <CollectionGrid>
        {collections.map((collection) => (
          <CollectionItem key={collection.id}>
            <CollectionImage
              src={collection.largeImageURL || 'https://via.placeholder.com/500'}
              alt={collection.tags || 'Featured Collection'}
            />
          </CollectionItem>
        ))}
      </CollectionGrid>
    </CollectionContainer>
  );
};

export default FeaturedCollections;
