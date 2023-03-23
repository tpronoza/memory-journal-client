import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createList, updateList } from '../../utils/data/listData';

const initalState = {
  name: '',
  description: '',
  image: '',
};

const ListForm = ({ user, obj }) => {
  const [currentList, setCurrentList] = useState(initalState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentList((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // console.warn(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = {
      name: currentList.name,
      description: currentList.description,
      image: currentList.image,
      user: user.id,
    };
    if (obj.id) {
      updateList(list, obj.id).then(() => router.push('/lists'));
    } else {
      createList(list).then(() => router.push('/lists'));
      // console.warn(list);
    }
  };

  useEffect(() => {
    if (obj.id) {
      const editList = {
        name: obj.name,
        description: obj.description,
        image: obj.image,
      };
      setCurrentList(editList);
    }
  }, [obj]);
  // console.warn(obj);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Post'} List</h2>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="name" required value={currentList.name} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" required value={currentList.image} onChange={handleChange} />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentList.description} onChange={handleChange} />
        </Form.Group>
        <Button className="create" type="submit">{obj.id ? 'Update' : 'Post'} List</Button>
      </Form>
    </>
  );
};

ListForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
  }),
}.isRequired;

ListForm.defaultProps = {
  obj: initalState,
};

export default ListForm;
