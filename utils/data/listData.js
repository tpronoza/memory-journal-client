import { clientCredentials } from '../client';

const getLists = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getListsById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const getItemList = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/listitems`)
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
        name: data.name,
        image: data.image,
        description: data.description,
        user: data.user,
      });
    })
    .catch((error) => reject(error));
});

const createList = (list) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists`, {
    method: 'POST',
    body: JSON.stringify(list),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// const updateList = (list, id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/lists/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       name: list.name,
//       image: list.image,
//       description: list.description,
//       user: list.id,
//     }),
//     headers: {
//       'content-type': 'application/json',
//     },
//   })
//     .then((response) => resolve(response))
//     .catch((error) => reject(error));
// });

const updateList = (list, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(list),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteList = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lists/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const viewItem = (id, item) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/list/${id}/watch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const dropItem = (id, itemId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/list/${id}/drop`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemId),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getLists,
  getSingleList,
  getListsById,
  getItemList,
  createList,
  updateList,
  deleteList,
  viewItem,
  dropItem,
};
