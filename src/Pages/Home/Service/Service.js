import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ singleService }) => {
  return (
    <div className="col">
      <div className="card h-100 service">
        <img
          src={singleService.image}
          className="card-img-top h-100"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{singleService.title}</h5>
          <Link to="/details">
            <button className="btn-primary rounded-3">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
