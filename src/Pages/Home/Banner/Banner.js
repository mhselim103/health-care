import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="">
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block img"
            src="https://i.ibb.co/fXgpKbK/coronavirus-awereness1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block img"
            src="https://i.ibb.co/w7bM1Tr/survivor1.png"
            alt="Second slide"
          />
          {/* <Carousel.Caption className="carousel-caption">
            <div className="bg-primary text-light">
              <h3>Help victorians survive life's most critical moments.</h3>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img"
            src="https://i.ibb.co/rvcY7tC/victorians1.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption className="carousel-caption">
            <div className="bg-primary text-light">
              <h3>From survivor to inspiration and Advocate</h3>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
