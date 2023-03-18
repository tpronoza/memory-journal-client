import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function ListItemCard({ listObj }) {
  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Link href={`/Comic/${listObj.id}`} passHref>
        <Card.Img variant="top" src={listObj.image} alt={listObj.name} style={{ height: '400px' }} />
      </Link>
      <Card.Body>
        <Card.Title>{listObj.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

ListItemCard.propTypes = {
  listObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.number,
  }).isRequired,
};

export default ListItemCard;
