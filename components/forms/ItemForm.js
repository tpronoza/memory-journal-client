/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
// import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { createItem, updateItem, getItems } from '../../utils/data/itemData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  id: 0,
  description: '',
  image_url: '',
};

// eslint-disable-next-line react/prop-types
function ItemForm({ object }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const [setItem] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getItems().then(setItem);
    if (object.id) setFormInput(object);
  }, [object, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (object.id) {
  //     updateItem(formInput, object.id)
  //       .then(() => router.push('/items'));
  //   } else {
  //     const payload = { ...formInput };
  //     createItem(payload).then(setFormInput(initialState));
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      description: formInput.description,
      image_url: formInput.itemImage,
      user: user.id,
    };
    if (object.id) {
      updateItem(article, object.id).then(() => router.push('/items'));
    } else {
      createItem(article).then(() => router.push('/items'));
    }
  };

  return (
    <Form className="form-floating" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" type="text" required value={formInput.description} onChange={handleChange} />
        <Form.Label>Image Link</Form.Label>
        <Form.Control name="imageUrl" type="text" required value={formInput.imageUrl} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">{object.id ? 'Update' : 'Create'} Item</Button>
    </Form>
  );
}

ItemForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  object: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

ItemForm.defaultProps = {
  object: initialState,
};

export default ItemForm;
