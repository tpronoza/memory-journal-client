import React, { useEffect, useState } from 'react';
import { Form, Button, TextField } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { createList, updateList, getSingleList } from '../../utils/data/listData';
import { getCategories } from '../../utils/data/categoryData';
import { getItems } from '../../utils/data/itemData';
import { createListItemData, deleteListItemData, getListItemData } from '../../utils/data/listItemData';

const initialState = {
  title: '',
  status: '',
  description: '',
  categoryId: null,
};
export default function ListForm({ listObj, user }) {
  const [currentList, setCurrentList] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  // const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    getCategories().then(setCategories);
    getItems().then(setItems);
    if (listObj?.id) {
      getSingleList(listObj.id).then((response) => {
        getListItemData(listObj.id).then((itemArr) => setSelectedItems(itemArr.map((item) => item.item_id)));
        setCurrentList(response);
        setSelectedCategory(listObj.category.id);
      });
    }
  }, [listObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'categoryId') {
      setSelectedCategory(value);
      setCurrentList((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setCurrentList((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // const handleItemChange = (itemId) => {
  //   if (selectedItems.includes(itemId)) {
  //     setSelectedItems(selectedItems.filter((item) => item !== itemId));
  //   } else {
  //     setSelectedItems([...selectedItems, itemId]);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listObj.id) {
      deleteListItemData(listObj.id).then((existingListItems) => {
        existingListItems.forEach((existingListItem) => {
          if (!selectedItems.includes(existingListItem.item_id)) {
            deleteListItemData(existingListItem.id);
          }
        });
        selectedItems.forEach((itemId) => {
          const existingListItem = existingListItems.find((listItem) => listItem.item_id === itemId);
          if (!existingListItem) {
            const listItem = {
              listId: listObj.id,
              itemId,
            };
            createListItemData(listItem);
          }
        });
      });
      updateList(user, currentList, listObj.id).then(() => {
        router.push('/');
      });
    } else {
      createList(currentList, user).then((response) => {
        selectedItems.forEach((itemId) => {
          const listItem = {
            listId: response.id,
            itemId,
          };
          createListItemData(listItem);
        });
        router.push('/');
      });
    }
  };

  return (
    <>
      <Form className="listForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <TextField fullWidth name="title" label="Title" required value={currentList.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextField multiline label="Description" className="form-control" rows="5" name="description" required value={currentList.content} onChange={handleChange} />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <TextField fullWidth label="Image URL" name="imageUrl" required value={currentList.imageUrl} onChange={handleChange} />
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Select onChange={handleChange} className="mb-3" name="categoryId" value={selectedCategory} required>
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Items</Form.Label>
          {items.map((item) => (
            <Form.Check type="checkbox" label={item.description} value={item.id} key={item.id} checked={selectedItems.includes(item.id)} onChange={() => handleChange(item.id)} id={`checkbox-${item.id}`} />
          ))}
        </Form.Group>

        <Button className="create" type="submit">{listObj.id ? 'Update' : 'Create'}
          Submit
        </Button>
      </Form>
    </>
  );
}

ListForm.propTypes = {
  listObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
    itemId: PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
    }),
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

ListForm.defaultProps = {
  listObj: initialState,
};
