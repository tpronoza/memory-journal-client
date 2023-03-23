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
    if (window.confirm(`Delete ${articleObj.name}?`)) {
      deleteInspirationArticle(articleObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Link href={`/inspirationarticles/${articleObj.id}`} passHref>
        <Card.Img variant="top" src={articleObj.image} alt={articleObj.name} style={{ height: '400px' }} />
      </Link>
      <Card.Body>
        <Card.Title>{articleObj.name}</Card.Title>
        <p>{articleObj.description}</p>
        {/* <p>{articleObj.user.name}</p> */}
        {articleObj.user.uid === user.uid ? (
          <>
            <Link href={`/inspirationarticles/edit/${articleObj.id}`} passHref>
              <Button className="edit" size="sm" variant="dark">EDIT</Button>
            </Link>
            <Button className="delete" size="sm" variant="danger" onClick={deleteThisArticle}>
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
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      uid: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default InspirationArticleCard;
