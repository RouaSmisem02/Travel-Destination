import React from 'react';
import './Tours.css';
import data from '../../data/db.json';
import Tour from './tour/Tour';
function Tours() {
  return (
    <>
      {data.map(tour => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </>
  );
}
export default Tours;