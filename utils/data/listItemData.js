import { clientCredentials } from '../client';

const getListItemData = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/listitems`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createListItemData = (listId, itemId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/listitems`, {
    method: 'POST',
    body: JSON.stringify({
      list_id: listId,
      item_id: itemId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteListItemData = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/listitems/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getListItemData,
  createListItemData,
  deleteListItemData,
};
