import React from "react";
import { Carss } from "./data";  // Ensure this import matches the export
import { IoPerson } from "react-icons/io5";

const Cars = () => {
  return (
    <div>
      <div className="container py-5">
        <h2 className="mb-4">Featured Cars on our Platform</h2>
        <div className="row g-4">
          {Carss.map((car) => (
            <div className="col-md-6" key={car.id}>
              <div className="card" style={{ backgroundColor: "#282c48", borderRadius: "15px", border: "none" }}>
                <img
                  src={car.image}
                  alt={car.title}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-light">{car.title}</h5>
                  <p className="card-text text-light">
                    <span style={{ color: "#00d9ff", fontWeight: "bold" }}>${car.price}</span> / day
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between text-white">
                  <span>{car.type}</span>
                  <span><IoPerson /> {car.seats}</span>
                  <span>{car.power}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
