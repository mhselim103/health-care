import React, { useEffect, useState } from "react";
import Hospital from "../../Hospital/Hospital";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    fetch("./hospital.json")
      .then((res) => res.json())
      .then((data) => setHospitals(data));
  }, []);
  return (
    <div className="my-5 text-center container">
      <h1>Our Hospitals</h1>
      <div className="row row-cols-1 row-cols-md-3 g-3 my-5 ">
        {hospitals?.map((hospital) => (
          <Hospital key={hospital.id} hospital={hospital}></Hospital>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
