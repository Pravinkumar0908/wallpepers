// src/components/Images.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';

const API_KEY = 'HQNcjdA6J4eqytIKvCwDxO2Q3eRQfNFT0y66FzyPIntI2irxtfgDyZS4 ';

const ImagesContainer = styled.div`
  max-width: 1600px;
  margin-top: 100px;
  padding: 2rem;
`;

const CategoryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const ItemOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ItemInfo = styled.div`
  color: white;
  text-align: left;
`;

const ItemCategory = styled.span`
  display: block;
  font-size: 0.9rem;
`;

const ItemPhotographer = styled.span`
  display: block;
  font-size: 0.8rem;
`;

const Images = () => {
  const [images, setImages] = useState({
    nature: [],
    technology: [],
    animals: [],
  });

  useEffect(() => {
    fetchImages('nature', 'nature');
    fetchImages('technology', 'technology');
    fetchImages('animals', 'animals');
    fetchImages('love', 'love');

  }, []);

  const fetchImages = async (query, category) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=20`, {
        headers: { Authorization: API_KEY }
      });
      setImages(prevImages => ({
        ...prevImages,
        [category]: response.data.photos
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <ImagesContainer>
      {Object.keys(images).map(category => (
        <div key={category}>
          <CategoryTitle>{category.charAt(0).toUpperCase() + category.slice(1)}</CategoryTitle>
          <Gallery>
            {images[category].map((item) => (
              <GalleryItem
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ItemImage src={item.src.medium} alt={item.photographer} />
                <ItemOverlay>
                  <ItemInfo>
                    <ItemCategory>{category}</ItemCategory>
                    <ItemPhotographer>By: {item.photographer}</ItemPhotographer>
                  </ItemInfo>
                </ItemOverlay>
              </GalleryItem>
            ))}
          </Gallery>
        </div>
      ))}
    </ImagesContainer>
  );
};

export default Images;
