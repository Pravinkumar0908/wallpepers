import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaSearch, FaPlay, FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIXABAY_API_KEY = '35264620-3ea2afb032306dd15ad5f8eef';
const PEXELS_API_KEY = 'HQNcjdA6J4eqytIKvCwDxO2Q3eRQfNFT0y66FzyPIntI2irxtfgDyZS4';

const VideoContainer = styled.div`
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const VideoThumb = styled.video`
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

const PlayButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #999;
  margin-top: 2rem;
`;

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    fetchVideos();
  }, []);

  const fetchVideos = async (query = '') => {
    try {
      const pixabayResponse = await axios.get(
        `https://pixabay.com/api/videos/?key=${PIXABAY_API_KEY}&q=${query || 'nature'}&per_page=10`
      );

      const pexelsResponse = await axios.get(
        `https://api.pexels.com/videos/popular`,
        {
          headers: { Authorization: PEXELS_API_KEY }
        }
      );

      setVideos([
        ...pixabayResponse.data.hits,
        ...pexelsResponse.data.videos
      ]);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('An error occurred while fetching videos.');
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setError('Please enter a search query.');
      setSearchActive(false);
      return;
    }

    fetchVideos(searchQuery);
    setSearchActive(true); // Activate search mode
  };

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <VideoContainer>
      <Hero>
        <Title data-aos="fade-up">Explore Stunning Videos</Title>
        <Subtitle data-aos="fade-up" data-aos-delay="200">
          Download high-quality, royalty-free stock videos from Pixabay & Pexels
        </Subtitle>
      </Hero>

      <SearchBar data-aos="fade-up" data-aos-delay="400">
        <SearchInput
          type="text"
          placeholder="Search for videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
          <FaSearch /> Search
        </SearchButton>
      </SearchBar>

      {error && <NoResults>{error}</NoResults>}

      {searchActive && videos.length === 0 && !error && (
        <NoResults>No results found for "{searchQuery}". Please try a different search term.</NoResults>
      )}

      {searchActive && videos.length > 0 && (
        <Gallery>
          {videos.map((item, index) => (
            <GalleryItem
              key={item.id || item.video_files[0].id}
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <VideoThumb
                src={item.videos?.medium.url || item.video_files[0].link}
                alt={item.tags || item.user.name}

              />
              <ItemOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <PlayButton onClick={() => handleDownload(item.videos?.medium.url || item.video_files[0].link)}>
                  <FaPlay /> Play / Download
                </PlayButton>
              </ItemOverlay>
            </GalleryItem>
          ))}
        </Gallery>
      )}
    </VideoContainer>
  );
};

export default VideoGallery;
