import React from 'react';
import InspirationArticleForm from '../../components/forms/InspirationArticleForm';
import { useAuth } from '../../utils/context/authContext';

export default function NewInspirationArticle() {
  const { user } = useAuth();
  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <InspirationArticleForm user={user} />
    </div>
  );
}
