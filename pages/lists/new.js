import React from 'react';
import ListForm from '../../components/forms/ListForm';
import { useAuth } from '../../utils/context/authContext';

export default function AddList() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Post a List</h2>
      <ListForm user={user} />
    </div>
  );
}
