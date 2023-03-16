/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { deleteInspirationArticle } from '../utils/data/inspirationArticleData';

function InspirationArticleCard({ articleObj, onUpdate }) {
  const { user } = useAuth();

  const deleteThisArticle = () => {
    if (window.confirm(`Delete ${articleObj.title}`)) {
      deleteInspirationArticle(articleObj?.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Link href={`/inspirationarticles/${articleObj.id}`} passHref>
        <Card.Img variant="top" src={articleObj.item_image} alt={articleObj.title} style={{ height: '400px' }} />
      </Link>
      <Card.Body>
        <Card.Title>{articleObj.title}</Card.Title>
        <p>{articleObj.description}</p>
        {/* <p>{articleObj.user.name}</p> */}
        {articleObj.user.uid === user.uid ? (
          <>
            <Link href={`/inspirationarticles/edit/${articleObj.id}`} passHref>
              <Button className="edit">EDIT</Button>
            </Link>
            <Button className="delete" onClick={deleteThisArticle}>
              DELETE
            </Button>
          </>
        ) : ''}
      </Card.Body>
    </Card>
  );
}

InspirationArticleCard.propTypes = {
  articleObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    item_image: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      // first_name: PropTypes.string,
      uid: PropTypes.string,
    }),
  }).isRequired,
};

export default InspirationArticleCard;
