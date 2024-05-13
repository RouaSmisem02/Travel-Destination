import React from 'react';
import './Tours.css';
import data from '../../data/db.json';
function Tours() {
  return (
    <div>
      {data.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
        </div>
      ))}
    </div>
  );
}
export default Tours;