import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteItem } from '../utils/data/itemData';

function ItemCard({
  name,
  image,
  description,
  id,
  onUpdate,
}) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteItem(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Title: {name}</li>
          <li className="list-group-item">Description: {description}</li>
        </ul>
        <Link href={`/items/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/items/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisItem} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ItemCard;
