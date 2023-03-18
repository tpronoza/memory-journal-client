import { clientCredentials } from '../client';

const getItems = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getItemsById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${id}`)
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
        image: data.image,
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
      Accept: 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((reject));
});

const updateItem = (item, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${id}`, {
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
  getItemsById,
  createItem,
  updateItem,
  deleteItem,
};
