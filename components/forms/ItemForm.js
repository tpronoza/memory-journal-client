/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { createItem, updateItem } from '../../utils/data/itemData';

const initalState = {
  name: '',
  description: '',
  image: '',
};

const ItemForm = ({ user, obj }) => {
  const [currentItem, setCurrentItem] = useState(initalState);
  const router = useRouter();

  useEffect(() => {
    if (obj.id) {
      const editItem = {
        name: obj.name,
        description: obj.description,
        image: obj.image,
      };
      setCurrentItem(editItem);
    }
  }, [obj]);
  // console.warn(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: currentItem.name,
      description: currentItem.description,
      image: currentItem.image,
      user: user.id,
    };
    if (obj.id) {
      updateItem(item, item.id).then(() => router.push('/items'));
    } else {
      createItem(item).then(() => router.push('/items'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Post'} Item</h2>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="name" required value={currentItem.name} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" required value={currentItem.image} onChange={handleChange} />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentItem.description} onChange={handleChange} />
        </Form.Group>
        <Button className="create" type="submit">{obj.id ? 'Update' : 'Post'} Item</Button>
      </Form>
    </>
  );
};

ItemForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
  }).isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,

  }),
}.isRequired;

ItemForm.defaultProps = {
  obj: initalState,
};

export default ItemForm;

// const initialState = {
//   description: '',
//   image: '',
// };

// // eslint-disable-next-line react/prop-types
// function ItemForm({ itemObj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const router = useRouter();
//   // const [setItem] = useState([]);
//   const { user } = useAuth();

//   // useEffect(() => {
//   //   // getItems().then();
//   //   if (itemObj.id) setFormInput(itemObj);
//   // }, [itemObj]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (object.id) {
//   //     updateItem(formInput, object.id)
//   //       .then(() => router.push('/items'));
//   //   } else {
//   //     const payload = { ...formInput };
//   //     createItem(payload).then(setFormInput(initialState));
//   //   }
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const article = {
//       description: formInput.description,
//       image: formInput.image,
//       user: user.id,
//     };
//     if (itemObj.id) {
//       updateItem(article, itemObj.id).then(() => router.push('/items'));
//     } else {
//       createItem(article).then(() => router.push('/items'));
//     }
//   };

//   useEffect(() => {
//     if (itemObj.id) {
//       const editItem = {
//         description: itemObj.description,
//         image: itemObj.image,
//       };
//       setFormInput(editItem);
//     }
//   }, [itemObj]);
//   console.warn(itemObj);

//   return (
//     <Form className="form-floating" onSubmit={handleSubmit}>
//       <Form.Group className="mb-3">
//         <Form.Label>Description</Form.Label>
//         <Form.Control name="description" type="text" required value={formInput.description} onChange={handleChange} />
//         <Form.Label>Image Link</Form.Label>
//         <Form.Control name="image" type="text" required value={formInput.image} onChange={handleChange} />
//       </Form.Group>
//       <Button type="submit">{itemObj.id ? 'Update' : 'Create'} Item</Button>
//     </Form>
//   );
// }

// ItemForm.propTypes = {
//   user: PropTypes.shape({
//     uid: PropTypes.string,
//     id: PropTypes.number,
//   }).isRequired,
//   itemObj: PropTypes.shape({
//     id: PropTypes.number,
//     description: PropTypes.string,
//     image: PropTypes.string,
//   }),
// }.isRequired;

// ItemForm.defaultProps = {
//   itemObj: initialState,
// };

// export default ItemForm;
