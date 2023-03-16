import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({ items, setFilteredItems }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = items.filter((item) => item.description.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase()));
    setFilteredItems(results);
  };

  const resetInput = () => {
    setSearchInput('');
    setFilteredItems(items);
  };

  return (
    <div className="search-container">
      <h5 className="center-text">Search and Browse Items</h5>
      <div className="search">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Item"
            aria-label="Item"
            value={searchInput}
            onChange={handleChange}
            aria-describedby="basic-addon2"
          />
          <Button variant="secondary" onClick={resetInput}>
            Reset Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
  })).isRequired,
  setFilteredItems: PropTypes.func.isRequired,
};

export default Search;
