import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createInspirationArticle, updateInspirationArticle } from '../../utils/data/inspirationArticleData';

const initialState = {
  id: 0,
  name: '',
  description: '',
  image: '',
};

function InspirationArticleForm({ articleObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  // useEffect(() => {
  //   if (articleObj.id) setFormInput(articleObj);
  // }, [articleObj, user]);

  useEffect(() => {
    if (articleObj.id) {
      const editCollection = {
        name: articleObj.name,
        description: articleObj.description,
        image: articleObj.image,

      };
      setFormInput(editCollection);
    }
  }, [articleObj]);
  // console.warn(articleObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      name: formInput.name,
      description: formInput.description,
      image: formInput.image,
      user: user.id,
    };
    if (articleObj.id) {
      updateInspirationArticle(article, articleObj.id).then(() => router.push('/inspirationarticles'));
    } else {
      createInspirationArticle(article).then(() => router.push('/inspirationarticles'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{articleObj?.id ? 'Update' : 'Create'} Inspiration Article</h2>
      <FloatingLabel controlId="floatingInput1" label="Inspiration Article Title" className="mb-3">
        <Form.Control type="text" placeholder="Enter Inspiration Article Title " name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Inspiration Article Description" className="mb-3">
        <Form.Control type="text" placeholder="Enter Inspiration Article Description" name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Inspiration Artile Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter Inspiration Article Link" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>

      <Button type="submit" className="btn btn-secondary btn-sml copy-btn">{articleObj?.id ? 'Update' : 'Create'} Inspiration Article</Button>
    </Form>
  );
}

InspirationArticleForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  articleObj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

InspirationArticleForm.defaultProps = {
  articleObj: initialState,
};

export default InspirationArticleForm;
