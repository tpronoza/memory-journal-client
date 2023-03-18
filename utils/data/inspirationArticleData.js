import { clientCredentials } from '../client';

const getInspirationArticles = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getAllInspirationArticles = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleInspirationArticle = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        name: data.name,
        description: data.description,
        image: data.image,
        user: data.user,
      });
    })
    .catch((error) => reject(error));
});

const createInspirationArticle = (article) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(article),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateInspirationArticle = (inspirationArticle, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles/${id}`, {
    method: 'PUT',
    body: JSON.stringify(inspirationArticle),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteInspirationArticle = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getInspirationArticles,
  getSingleInspirationArticle,
  createInspirationArticle,
  updateInspirationArticle,
  deleteInspirationArticle,
  getAllInspirationArticles,
};
