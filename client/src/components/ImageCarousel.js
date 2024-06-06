import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'; 

import ban01 from '../assets/ban03.png';
import ban02 from '../assets/ban03.png';
import ban03 from '../assets/ban03.png';
import ban04 from '../assets/ban03.png';
import ban05 from '../assets/ban03.png';

const images = [ban01, ban02, ban03, ban04, ban05];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
