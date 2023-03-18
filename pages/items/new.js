import React from 'react';
import { useAuth } from '../../utils/context/authContext';
import ItemForm from '../../components/forms/ItemForm';

export default function NewItem() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Post a Bandana</h2>
      <ItemForm user={user} />
    </div>
  );
}
