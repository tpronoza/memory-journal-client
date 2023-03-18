import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';

function DropDown({
  name,
  image,
}) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '400px' }} />
      <Card.Body>
        <Container>
          <Card.Title> {name}</Card.Title>
          <li className="list-group-item">Name: {name}</li>
        </Container>
      </Card.Body>
    </Card>
  );
}

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};

export default DropDown;
