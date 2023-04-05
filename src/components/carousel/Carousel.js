import React, { useState, useEffect, useRef } from 'react';
import './carousel.scss';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex, images]);

  const handlePrev = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setShowArrows(true);
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
    timerRef.current = setTimeout(() => setShowArrows(false), 2000);
  };

  return (
    <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {images.map((img, index) => (
        <img
          key={index}
          className={`carousel__image ${activeIndex === index ? 'active' : ''}`}
          src={img}
          alt={`Carousel Image ${index}`}
        />
      ))}
      {showArrows && (
        <>
          <ArrowBackIosNewOutlinedIcon className="carousel__button carousel__button--prev" onClick={handlePrev}/>
          <ArrowForwardIosOutlinedIcon className="carousel__button carousel__button--next" onClick={handleNext}/>
        </>
      )}
    </div>
  );
};

export default Carousel;
