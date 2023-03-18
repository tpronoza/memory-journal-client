import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import { getItemsById } from '../../../utils/data/itemData';
import ItemForm from '../../../components/forms/ItemForm';

export default function EditInspirationArticle() {
  const [editItem, setEditItem] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getItemsById(id).then(setEditItem);
  }, [user, router, id]);
  return (
    <ItemForm user={user} obj={editItem} />
  );
}
