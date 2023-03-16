import { clientCredentials } from '../client';

const getLists = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleList = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        description: data.description,
        status: data.status,
        category: data.category,
        user: data.user,
      });
    })
    .catch((error) => reject(error));
});

const createList = (list) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists`, {
    method: 'POST',
    body: JSON.stringify({
      title: list.title,
      image_url: list.imageUrl,
      description: list.description,
      status: list.status,
      category: list.category,
      user_id: list.userId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateList = (list) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists/${list.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: list.title,
      image_url: list.imageUrl,
      description: list.description,
      status: list.status,
      category: list.category,
      user_id: list.userId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteList = (listId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists/${listId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getLists,
  getSingleList,
  createList,
  updateList,
  deleteList,
};
