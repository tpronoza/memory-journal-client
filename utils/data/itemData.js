import { clientCredentials } from '../client';

const getItems = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        description: data.description,
        imageUrl: data.image_url,
        user: data.user,
      });
    })
    .catch((error) => reject(error));
});

const createItem = (item) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items`, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateItem = (item) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${item.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(item),
  })
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getItems,
  getSingleItem,
  createItem,
  updateItem,
  deleteItem,
};
