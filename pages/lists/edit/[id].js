import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ListForm from '../../../components/forms/ListForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleList } from '../../../utils/data/listData';

export default function EditPost() {
  const [editList, setEditList] = useState({});
  const router = useRouter();
  const { listId } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getSingleList(listId).then(setEditList);
  }, [listId]);

  return (
    <ListForm postObj={editList} user={user} />
  );
}
