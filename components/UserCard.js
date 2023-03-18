import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{userObj.first_name + userObj.last_name}</Card.Title>
        <Link href={`/users/${userObj.id}`} passHref>
          <Button className="custom-btn">Collection</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default UserCard;
