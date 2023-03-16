import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem } from '../../../utils/data/itemData';
import ItemForm from '../../../components/forms/ItemForm';

export default function EditInspirationArticle() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleItem(id).then(setEditItem);
  }, [id, router]);

  return (<ItemForm articleObj={editItem} />);
}
