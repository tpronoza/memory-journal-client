/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { deleteList } from '../utils/data/listData';

function ListCard({ listObj, onUpdate }) {
  const { user } = useAuth();

  const deleteThisList = () => {
    if (window.confirm(`Delete ${listObj.name}?`)) {
      deleteList(listObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Link href={`/list/${listObj.id}`} passHref>
        <Card.Img variant="top" src={listObj.image} alt={listObj.name} style={{ height: '400px' }} />
      </Link>
      <Card.Body>
        <Card.Title>{listObj.name}</Card.Title>
        <p>{listObj.user.name}</p>
        {listObj.user.uid === user.uid ? (
          <>
            <Link href={`/list/edit/${listObj.id}`} passHref>
              <Button className="edit">EDIT</Button>
            </Link>
            <Button className="delete" onClick={deleteThisList}>
              DELETE
            </Button>
            <div className="d-flex flex-wrap">
              {listObj.categories?.map((category) => (
                <p> {category.label} </p>
              ))}
            </div>
          </>
        ) : ''}
      </Card.Body>
    </Card>
  );
}

ListCard.propTypes = {
  listObj: PropTypes.shape({
    categories: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
    title: PropTypes.string,
    image_url: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      uid: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ListCard;
