import React, { useState } from 'react';
import './cars.css';
import { Carss } from './data';

const Cars = () => {
  const [isVisible, setIsVisible] = useState(3);

  const showMore = () => {
    setIsVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card_area">
          {Carss.slice(0, isVisible).map((car) => (
            <div className="card" key={car.id}>
              <img src={car.image} alt={car.title} />
              <div className="overlay">
                <h2>{car.title}</h2>
                <p>{car.decs}</p>
                <a href="#">Book now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isVisible < Carss.length && (
        <button onClick={showMore} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
};

export default Cars;
