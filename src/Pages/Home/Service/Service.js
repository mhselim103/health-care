import React from "react";
import "./Service.css";

const Service = ({ singleService }) => {
  return (
    <div className="col">
      <div className="card h-100 cursour">
        <img
          src={singleService.image}
          className="card-img-top h-100"
          alt="..."
        />
        <div className="card-body bg-black">
          <h5 className="card-title text-light">{singleService.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Service;
