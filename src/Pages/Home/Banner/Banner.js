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
            src="https://i.ibb.co/4tPbQTQ/coronavirus-awereness.png"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <div className="bg-primary text-light">
              <h3>Coronavirus (COVID-19) Vaccination camp</h3>
              {/* <p>
                Everything you need to know about our screening clinics, visitor
                restrictions and getting vaccinated at our COVID-19 vaccination
                centers.
              </p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block img"
            src="https://i.ibb.co/ZS876gF/survivor.png"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <div className="bg-primary text-light">
              <h3>Help victorians survive life's most critical moments.</h3>
              {/* <p>Donate to the nobel cure</p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img"
            src="https://i.ibb.co/s5yb1JM/victorians.png"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <div className="bg-primary text-light">
              <h3>From survivor to inspiration and Advocate</h3>
              {/* <p>A celebration to human spirit</p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
