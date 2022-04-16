import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../images/banner/banner-1.jpg';
import banner2 from '../../images/banner/banner-2.jpg';
import banner3 from '../../images/banner/banner-3.jpg';
const Banner = () => {
    return (
        <div>
            <div className="carousel-text">
                <h1 className="text-1">Explore the world with me</h1>
                <h2 className="text-2">Let me guide your favourite tourist place</h2>
                </div>
            <Carousel className="carousel-images">
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={banner1}  
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={banner2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={banner2}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;