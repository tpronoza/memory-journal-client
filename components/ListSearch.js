import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

function ListSearch({ lists, setFilteredLists }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = lists.filter((list) => list.title.toLowerCase().includes(value.toLowerCase()) || list.content.toLowerCase().includes(value.toLowerCase()));
    setFilteredLists(results);
  };

  return (
    <Form className="postSearch">
      <Form.Control type="search" placeholder="Search Lists" value={searchInput} onChange={handleChange} />
    </Form>
  );
}

ListSearch.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      status: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  setFilteredLists: PropTypes.func.isRequired,
};

export default ListSearch;
