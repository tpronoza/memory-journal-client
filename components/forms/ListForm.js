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

// const initialState = {
//   name: '',
//   status: '',
//   description: '',
//   categoryId: null,
// };
// export default function ListForm({ listObj, user }) {
//   const [currentList, setCurrentList] = useState(initialState);
//   const [categories, setCategories] = useState([]);
//   const [items, setItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState([]);
//   // const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     getCategories().then(setCategories);
//     getItems().then(setItems);
//     if (listObj?.id) {
//       getSingleList(listObj.id).then((response) => {
//         getListItemData(listObj.id).then((itemArr) => setSelectedItems(itemArr.map((item) => item.item_id)));
//         setCurrentList(response);
//         setSelectedCategory(listObj.category.id);
//       });
//     }
//   }, [listObj]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'categoryId') {
//       setSelectedCategory(value);
//       setCurrentList((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     } else {
//       setCurrentList((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   // const handleItemChange = (itemId) => {
//   //   if (selectedItems.includes(itemId)) {
//   //     setSelectedItems(selectedItems.filter((item) => item !== itemId));
//   //   } else {
//   //     setSelectedItems([...selectedItems, itemId]);
//   //   }
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (listObj.id) {
//       deleteListItemData(listObj.id).then((existingListItems) => {
//         existingListItems.forEach((existingListItem) => {
//           if (!selectedItems.includes(existingListItem.item_id)) {
//             deleteListItemData(existingListItem.id);
//           }
//         });
//         selectedItems.forEach((itemId) => {
//           const existingListItem = existingListItems.find((listItem) => listItem.item_id === itemId);
//           if (!existingListItem) {
//             const listItem = {
//               listId: listObj.id,
//               itemId,
//             };
//             createListItemData(listItem);
//           }
//         });
//       });
//       updateList(user, currentList, listObj.id).then(() => {
//         router.push('/');
//       });
//     } else {
//       createList(currentList, user).then((response) => {
//         selectedItems.forEach((itemId) => {
//           const listItem = {
//             listId: response.id,
//             itemId,
//           };
//           createListItemData(listItem);
//         });
//         router.push('/');
//       });
//     }
//   };

//   return (
//     <>
//       <Form className="listForm" onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <TextField fullWidth name="name" label="name" required value={currentList.name} onChange={handleChange} />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <TextField multiline label="Description" className="form-control" rows="5" name="description" required value={currentList.content} onChange={handleChange} />
//         </Form.Group>
//         {/* <Form.Group className="mb-3">
//           <TextField fullWidth label="Image URL" name="image" required value={currentList.image} onChange={handleChange} />
//         </Form.Group> */}
//         <Form.Group className="mb-3">
//           <Form.Select onChange={handleChange} className="mb-3" name="categoryId" value={selectedCategory} required>
//             <option value="">Select a Category</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.label}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Items</Form.Label>
//           {items.map((item) => (
//             <Form.Check type="checkbox" label={item.description} value={item.id} key={item.id} checked={selectedItems.includes(item.id)} onChange={() => handleChange(item.id)} id={`checkbox-${item.id}`} />
//           ))}
//         </Form.Group>

//         <Button className="create" type="submit">{listObj.id ? 'Update' : 'Create'}
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// }

// ListForm.propTypes = {
//   listObj: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     status: PropTypes.string,
//     description: PropTypes.string,
//     category: PropTypes.shape({
//       id: PropTypes.number,
//       label: PropTypes.string,
//     }),
//     itemId: PropTypes.shape({
//       id: PropTypes.number,
//       description: PropTypes.string,
//     }),
//   }),
//   user: PropTypes.shape({
//     uid: PropTypes.string,
//     id: PropTypes.number,
//   }).isRequired,
// };

// ListForm.defaultProps = {
//   listObj: initialState,
// };
