import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.example.com/images'); // Replace with your API endpoint
        const data = await response.json();
        
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div id={'image-carousel'}>
      {images.length > 0 && (
        <div className="carousel-container">
          <button onClick={handlePrevious}>&lt;</button>
          <img src={images[currentIndex].url} alt="carousel-image" />
          <button onClick={handleNext}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
