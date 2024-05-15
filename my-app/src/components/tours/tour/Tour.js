import React from 'react';
import './Tour.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link
function Tour(props) {
  return (
    <>
      <Link to={`/city/${props.tour.id}`}>  
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.tour.image} />
          <Card.Body>
            <Card.Title>{props.tour.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}
export default Tour;