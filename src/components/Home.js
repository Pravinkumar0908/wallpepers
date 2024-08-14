import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaSearch, FaImage, FaVideo } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const API_KEY = 'HQNcjdA6J4eqytIKvCwDxO2Q3eRQfNFT0y66FzyPIntI2irxtfgDyZS4';

const HomeContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const SearchButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
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
`;

const ItemType = styled.span`
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #999;
  margin-top: 2rem;
`;

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    fetchImages();
  }, []);

  const fetchImages = async (query = '') => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${query || 'nature'}&per_page=15`, {
        headers: { Authorization: API_KEY }
      });
      setImages(response.data.photos);
      setError('');
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('An error occurred while fetching images.');
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setError('Please enter a search query.');
      setSearchActive(false);
      return;
    }

    fetchImages(searchQuery);
    setSearchActive(true);
  };

  const handleImageClick = (image) => {
    navigate('/imagepreview', { state: { image } });
  };

  return (
    <HomeContainer>
      <Hero>
        <Title data-aos="fade-up">Discover Amazing Images & Videos</Title>
        <Subtitle data-aos="fade-up" data-aos-delay="200">Download high-quality, royalty-free stock images and videos</Subtitle>
      </Hero>

      <SearchBar data-aos="fade-up" data-aos-delay="400">
        <SearchInput
          type="text"
          placeholder="Search for images or videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
          <FaSearch /> Search
        </SearchButton>
      </SearchBar>

      {error && <NoResults>{error}</NoResults>}

      {searchActive && images.length === 0 && !error && (
        <NoResults>No results found for "{searchQuery}". Please try a different search term.</NoResults>
      )}

      {searchActive && images.length > 0 && (
        <Gallery>
          {images.map((item, index) => (
            <GalleryItem
              key={item.id}
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => handleImageClick(item)}
            >
              <ItemImage src={item.src.medium} alt={item.photographer} />
              <ItemOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <ItemType>
                  {item.type === 'Photo' ? <FaImage /> : <FaVideo />}
                  {item.type}
                </ItemType>
              </ItemOverlay>
            </GalleryItem>
          ))}
        </Gallery>
      )}
    </HomeContainer>
  );
};

export default Home;