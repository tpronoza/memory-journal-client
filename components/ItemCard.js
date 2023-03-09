import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

function ItemCard({ itemObj }) {
  return (
    <div className="item-cards">
      <Link passHref href={`/items/${itemObj.id}`}>
        <Image src={itemObj.image_url} alt={itemObj.description} width="140" height="200" />
        <Card.Title>{itemObj.description}</Card.Title>
      </Link>
    </div>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    image_url: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
    }),
  }).isRequired,
};

export default ItemCard;
