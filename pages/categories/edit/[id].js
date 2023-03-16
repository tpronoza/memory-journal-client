import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CategoryForm from '../../../components/forms/CategoryForm';
import { getCategoryById } from '../../../utils/data/categoryData';

export default function EditCategory() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { categoryId } = router.query;
  useEffect(() => {
    getCategoryById(categoryId).then(setEditItem);
  }, [categoryId]);
  return (<CategoryForm object={editItem} />);
}
