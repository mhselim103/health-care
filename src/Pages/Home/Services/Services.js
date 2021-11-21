import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="row row-cols-2 row-cols-md-4 g-4 mt-5 text-center ">
        {services?.map((service) => (
          <Service key={service.id} singleService={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
