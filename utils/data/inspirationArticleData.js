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

const getSingleInspirationArticle = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        title: data.title,
        description: data.description,
        itemImage: data.item_image,
        user: data.user,
      });
    })
    .catch((error) => reject(error));
});

const createInspirationArticle = (article) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles`, {
    method: 'POST',
    body: JSON.stringify({
      title: article.title,
      description: article.description,
      item_image: article.itemImage,
      user_id: article.userId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateInspirationArticle = (inspirationArticle) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/inspirationarticles/${inspirationArticle.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: inspirationArticle.title,
      description: inspirationArticle.description,
      item_image: inspirationArticle.itemImage,
      user_id: inspirationArticle.user.id,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
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
};
