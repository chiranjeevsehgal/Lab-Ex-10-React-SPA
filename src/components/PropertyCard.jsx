import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PropertyCard({ name, type, location }) {
  return (
    <Card style={{ width: '18rem' }} className="col-md-8 mx-2 my-2">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{type}</Card.Text>
        <Button variant="primary">{location}</Button>
      </Card.Body>
    </Card>
  );
}
