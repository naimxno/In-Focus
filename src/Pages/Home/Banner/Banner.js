import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import banner1 from "../../../Images/banner1.jpg"
import banner2 from "../../../Images/banner2.jpg"
import banner3 from "../../../Images/banner3.jpg"


const Banner = () => {
  return (
    <Carousel className="banner-container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>In Focus</h3>
          <p>“If your photos aren’t good enough, then you’re not close enough.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>In Focus</h3>
          <p>“In photography there is a reality so subtle that it becomes more real than reality.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>In Focus</h3>
          <p>“Taking an image, freezing a moment, reveals how rich reality truly is.”</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;