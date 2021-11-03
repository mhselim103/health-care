import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import slide1 from "../../../images/Slides/slide1.jpg";
import slide2 from "../../../images/Slides/slide2.jpg";
import slide3 from "../../../images/Slides/slide3.jpg";
const Banner = () => {
  return (
    <div className="">
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img className="d-block img" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block img" src={slide2} alt="Second slide" />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img" src={slide3} alt="Third slide" />
          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
