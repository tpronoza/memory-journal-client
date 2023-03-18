import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, FloatingLabel, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getLists } from '../../utils/data/listData';
import { createListItemData } from '../../utils/data/listItemData';

const initalState = {
  item: {
    id: 0,
    name: '',
  },
  list: {
    id: 0,
    name: '',
  },
};

const ListItemForm = ({ obj }) => {
  const [currentList, setCurrentList] = useState(initalState);
  const [listItem, setListItem] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);
  const [, setDesiredListItem] = useState(initalState);
  const router = useRouter();
  const { id } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'list') {
      setDesiredListItem(value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    createListItemData(id, currentList.list).then(() => router.push('/lists'));
  };

  const filteredList = () => { listItem.filter((list) => list.item.id !== id); };

  useEffect(() => {
    if (obj.id) {
      const editList = {
        item: obj.item.name,
        list: obj.list.name,
      };
      setCurrentList(editList);
    }
    getLists().then(setListItem);
    filteredList();
  }, [obj]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">Add to List</h2>
        <FloatingLabel controlId="floatingSelect" label="List" className="mb-3">
          <Form.Select
            aria-label="List"
            name="list"
            onChange={handleChange}
            className="mb-3"
            value={currentList.list}
            required
          >
            <option value="">Select List</option>

            {
            // eslint-disable-next-line react/prop-types
            listItem?.map((list) => (
              <option
                key={list.id}
                value={list.id}
                defaultValue={currentList.list === list.id}
              >
                {list.name}
              </option>
            ))
          }
          </Form.Select>
        </FloatingLabel>
        <Button className="create" type="submit">{obj.id ? 'Update' : 'Post'} List</Button>
      </Form>
    </>
  );
};

ListItemForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    item: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    list: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
}.isRequired;

ListItemForm.defaultProps = {
  obj: initalState,
};

export default ListItemForm;
