import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ListForm from '../../../components/forms/ListForm';
import { useAuth } from '../../../utils/context/authContext';
import { getListsById } from '../../../utils/data/listData';

export default function EditPost() {
  const [editList, setEditList] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getListsById(id).then(setEditList);
  }, [user, router, id]);

  return (
    <ListForm user={user} obj={editList} />
  );
}
