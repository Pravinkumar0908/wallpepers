import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaDownload, FaSave, FaTimes, FaCrop, FaAdjust, FaChevronLeft, FaChevronRight, FaShare, FaInfoCircle, FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Slider, Tooltip } from '@material-ui/core';
import { ColorExtractor } from 'react-color-extractor';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const API_KEY = 'HQNcjdA6J4eqytIKvCwDxO2Q3eRQfNFT0y66FzyPIntI2irxtfgDyZS4';

const PageContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
`;

const ImageContainer = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 1200px;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

const PreviewImage = styled(motion.img)`
  max-width: 100%;
  max-height: 60vh;
  display: block;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  z-index: 10;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const SettingsContainer = styled(motion.div)`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(245, 245, 245, 0.9);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SettingsLabel = styled.label`
  color: #333;
  font-size: 1rem;
  font-weight: bold;
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ImageInfo = styled(motion.div)`
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
`;

const ColorPalette = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ColorSwatch = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const RelatedImagesContainer = styled(motion.div)`
  width: 90%;
  max-width: 1200px;
`;

const RelatedImagesTitle = styled(motion.h3)`
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const RelatedImagesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const RelatedImageItem = styled(motion.div)`
  position: relative;
`;

const RelatedImageThumb = styled(motion.img)`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const RelatedImageDownload = styled(motion.button)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ImagePreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state;
  const [relatedImages, setRelatedImages] = useState([]);
  const [quality, setQuality] = useState(100);
  const [resolution, setResolution] = useState('original');
  const [format, setFormat] = useState('jpg');
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [showInfo, setShowInfo] = useState(false);
  const [colors, setColors] = useState([]);
  const [liked, setLiked] = useState(false);
  const controls = useAnimation();
  const imageRef = useRef(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  useEffect(() => {
    fetchRelatedImages(image.photographer);
  }, [image]);

  const fetchRelatedImages = async (query) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=8`, {
        headers: {
          Authorization: API_KEY
        }
      });
      setRelatedImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching related images:', error);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleDownload = async (imageToDownload = currentImage) => {
    const imageUrl = getImageUrlByResolution(imageToDownload.src, resolution);
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const resizedImage = await resizeImage(blob, quality);
      const fileName = `${imageToDownload.photographer}_${resolution}.${format}`;
      saveAs(resizedImage, fileName);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const getImageUrlByResolution = (src, resolution) => {
    switch (resolution) {
      case 'small':
        return src.small;
      case 'medium':
        return src.medium;
      case 'large':
        return src.large;
      default:
        return src.original;
    }
  };

  const resizeImage = (blob, quality) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob((resizedBlob) => {
          resolve(resizedBlob);
        }, `image/${format}`, quality / 100);
      };
      img.src = URL.createObjectURL(blob);
    });
  };

  const handleSave = (image) => {
    console.log('Saving image:', image);
    const savedImages = JSON.parse(localStorage.getItem('savedImages') || '[]');
    savedImages.push(image.src.original);
    localStorage.setItem('savedImages', JSON.stringify(savedImages));
    alert('Image saved successfully!');
  };

  const handleCrop = () => {
    setIsCropping(!isCropping);
  };

  const handleCompleteCrop = () => {
    if (completedCrop && imageRef.current) {
      const croppedImageUrl = getCroppedImg(imageRef.current, completedCrop, 'cropped.jpg');
      saveAs(croppedImageUrl, 'cropped_image.jpg');
    }
    setIsCropping(false);
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
            return;
          }
          blob.name = fileName;
          resolve(window.URL.createObjectURL(blob));
        },
        'image/jpeg',
        1
      );
    });
  };

  const handleAdjust = () => {
    console.log('Adjusting image');
    // Implement image adjustment functionality (brightness, contrast, etc.)
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === -1 ? relatedImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === relatedImages.length - 1 ? -1 : prevIndex + 1
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this image!',
        text: `A beautiful image by ${currentImage.photographer}`,
        url: currentImage.url,
      });
    } else {
      console.log('Web Share API not supported');
      prompt('Copy this link to share the image:', currentImage.url);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.3 }
    });
  };

  const currentImage = currentImageIndex === -1 ? image : relatedImages[currentImageIndex];

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ImageContainer
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CloseButton
          onClick={handleClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes />
        </CloseButton>
        <AnimatePresence mode="wait">
          {isCropping ? (
            <ReactCrop
              src={currentImage.src.large}
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={(c) => setCompletedCrop(c)}
            >
              <img ref={imageRef} src={currentImage.src.large} alt={currentImage.photographer} />
            </ReactCrop>
          ) : (
            <PreviewImage
              key={currentImage.id}
              src={currentImage.src.large}
              alt={currentImage.photographer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <NavigationButton
          style={{ left: '1rem' }}
          onClick={handlePrevImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
            <FaChevronLeft />
        </NavigationButton>
        <NavigationButton
          style={{ right: '1rem' }}
          onClick={handleNextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </NavigationButton>
        <ButtonGroup>
          <ActionButton
            onClick={() => handleDownload()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download
          </ActionButton>
          <ActionButton
            onClick={() => handleSave(currentImage)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSave /> Save
          </ActionButton>
          <ActionButton
            onClick={handleCrop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCrop /> {isCropping ? 'Finish Crop' : 'Crop'}
          </ActionButton>
          <ActionButton
            onClick={handleAdjust}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAdjust /> Adjust
          </ActionButton>
          <ActionButton
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaShare /> Share
          </ActionButton>
          <ActionButton
            onClick={handleLike}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={controls}
          >
            <FaHeart color={liked ? 'red' : 'white'} /> {liked ? 'Liked' : 'Like'}
          </ActionButton>
        </ButtonGroup>
        <SettingsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SettingsLabel>Quality: {quality}%</SettingsLabel>
          <Slider
            value={quality}
            onChange={(_, newValue) => setQuality(newValue)}
            aria-labelledby="quality-slider"
            min={1}
            max={100}
          />
          <SettingsLabel>Resolution:</SettingsLabel>
          <Tooltip title="Select image resolution" arrow>
            <select value={resolution} onChange={(e) => setResolution(e.target.value)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="original">Original</option>
            </select>
          </Tooltip>
          <SettingsLabel>Format:</SettingsLabel>
          <Tooltip title="Select image format" arrow>
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="webp">WebP</option>
            </select>
          </Tooltip>
        </SettingsContainer>
        <ColorExtractor
          src={currentImage.src.large}
          getColors={colors => setColors(colors)}
        />
        <ColorPalette>
          {colors.map((color, i) => (
            <ColorSwatch
              key={i}
              style={{ backgroundColor: color }}
              onClick={() => console.log('Color clicked:', color)}
            />
          ))}
        </ColorPalette>
        {showInfo && (
          <ImageInfo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <p>Photographer: {currentImage.photographer}</p>
            <p>Dimensions: {currentImage.width} x {currentImage.height}</p>
            <p>ID: {currentImage.id}</p>
          </ImageInfo>
        )}
        <motion.button
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowInfo(!showInfo)}
        >
          <FaInfoCircle size={24} />
        </motion.button>
      </ImageContainer>

      <RelatedImagesContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <RelatedImagesTitle>Related Images</RelatedImagesTitle>
        <RelatedImagesGrid>
          {relatedImages.map((relatedImage, index) => (
            <RelatedImageItem key={relatedImage.id}>
              <RelatedImageThumb
                src={relatedImage.src.medium}
                alt={relatedImage.photographer}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImageIndex(index)}
              />
              <RelatedImageDownload
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDownload(relatedImage)}
              >
                <FaDownload size={14} />
              </RelatedImageDownload>
            </RelatedImageItem>
          ))}
        </RelatedImagesGrid>
      </RelatedImagesContainer>
    </PageContainer>
  );
};

export default ImagePreview;