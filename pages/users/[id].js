/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import ListItemCard from '../../components/ListItemCard';
import { getSingleUser } from '../../utils/data/userData';
import { deleteListItemData } from '../../utils/data/listItemData';
import { useAuth } from '../../utils/context/authContext';

export default function UserAdventurer() {
  const [user, setUser] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const fUser = useAuth();

  const getThisUser = () => {
    getSingleUser(id).then(setUser);
  };

  const removeFromCollection = (click, listId) => {
    click.preventDefault();
    deleteListItemData(listId).then(() => router.push('/'));
  };

  useEffect(() => {
    getThisUser();
  }, [id]);

  console.warn(fUser.user.id);

  return (
    <div>
      {/* <div className="d-flex flex-column">
        <img src={user.imageUrl} alt={user.lastName} />
      </div> */}
      <div className="user-title">
        <h2>
          {user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : ''}
        </h2>
      </div>
      <div className="user-lists">
        {user?.lists?.map((list) => (
          <div key={list.id}>
            <ListItemCard listObj={list} />
            {user?.id === fUser.user.id ? (
              <Button key={list.joined_lists[0].id} className="custom-btn" onClick={(click) => removeFromCollection(click, list.joined_lists[0].id)}>
                Remove from my Collection
              </Button>
            ) : null}
          </div>

        ))}
      </div>
    </div>
  );
}
