import React from "react";
import "./Hospital.css";

const Hospital = (props) => {
  const { title, description, image } = props.hospital;
  return (
    <div className="col">
      <div className="card text-center hospital">
        <img src={image} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <h3 className="card-title"> {title} </h3>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
