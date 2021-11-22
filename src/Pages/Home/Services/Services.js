import React from "react";
import useFetch from "../../../Hooks/useFetch";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useFetch();
  // console.log(services);
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
