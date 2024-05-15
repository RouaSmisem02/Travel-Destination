import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TourDetails.css';
const data = require('../../data/db.json');
function TourDetails() {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [tour, setTour] = useState(null);
  useEffect(() => {
    const foundTour = data.find(t => t.id === id);
    setTour(foundTour);
  }); 
  if (!tour) return <div>Loading...</div>; //if this line was not here an error with "cannot rnder null" and this because line 8 I'm setting useState to null
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
      <section className="dark">
          <div className="container py-4">
              <article className="postcard">
                  <div className="postcard__img_link">
                      <img className="postcard__img" src={tour.image} alt="Title" />
                  </div>
                  <div className="postcard__text">
                      <h1 className="postcard__title">{tour.name}</h1>
                      <div className="postcard__bar"></div>
                      <div className="postcard__preview-txt"> {showFullDescription ? tour.info : `${tour.info.slice(0, 400)} ...`} </div>
                      <ul className="postcard__tagbox">
                          <li className="tag__item"><i className="fas fa-tag"></i> Price: {tour.price}</li>
                          <li className="tag__item play">
                              <button onClick={toggleDescription} className="link-like-button">
                                <i className="fas fa-play"></i> {showFullDescription ? 'See Less' : 'See More'}
                              </button>
                          </li>
                      </ul>
                  </div>
              </article>
          </div>
      </section>
  );
}
export default TourDetails;