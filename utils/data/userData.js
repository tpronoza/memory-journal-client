import { clientCredentials } from '../client';

const getSingleUser = (userId, uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        imageUrl: data.image_url,
        email: data.email,
      });
    })
    .catch(reject);
});

const getUsers = (uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => (response.status === 200 ? response : false))
    .then((response) => {
      if (response) {
        resolve(response.json());
      } else {
        throw new Error('403 response from server');
      }
    })
    .catch(reject);
});

const updateUser = (userObj, userId) => new Promise((resolve, reject) => {
  const newUserObj = {
    first_name: userObj.firstName,
    last_name: userObj.lastName,
    bio: userObj.bio,
    profile_image_url: userObj.profileImageUrl,
    email: userObj.email,
    active: true,
  };
  fetch(`${clientCredentials.databaseURL}/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(newUserObj),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getSingleUser,
  getUsers,
  updateUser,
};
