// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/LandingPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TrendingSearches from './components/TrendingSearches';
import FeaturedCollections from './components/FeaturedCollections';
import VideoGallery from './components/VideoGallery';
import Images from './components/Images';
import Footer from './components/Footer'; 
import About from './components/About';
import Profile from './components/Profile';
import ImagePreview from './components/ImagePreview';
import Independent from './components/Independent';


const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/independent" element={<Independent/>} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={
            <>
              <Navbar />
              <TrendingSearches />
              <Home />
              <FeaturedCollections />
            </>
          } />

          <Route path="/videogallery" element={
            <>
              <Navbar />
              <VideoGallery />
            </>
          } />

          <Route path="/images" element={
            <>
              <Navbar />
              <Images />
            </>
          } />

          <Route path="/about" element={
            <>
              <Navbar />
              <About />
            </>
          } />

          <Route path="/profile" element={
            <>
              <Navbar />
              <Profile />
            </>
          } />

          <Route path="/imagepreview" element={
            <>
              <Navbar />
              <ImagePreview /> {/* Centered ImagePreview */}
              <Images />
            </>
          } />
        </Routes>
      </>
    </Router>
  );
};

export default App;
