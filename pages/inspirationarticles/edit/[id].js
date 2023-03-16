// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { useAuth } from '../../../utils/context/authContext';
// import { getSingleInspirationArticle, getAllInspirationArticles } from '../../../utils/data/inspirationArticleData';
// import InspirationArticleForm from '../../../components/forms/InspirationArticleForm';

// export default function EditInspirationArticle() {
//   const [editInspirationArticle, setEditInspirationArticle] = useState({});
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();

//   const singleArticle = () => {
//     getSingleInspirationArticle(id, user.id).then(setEditInspirationArticle);
//   };

//   const allArticles = () => {
//     getAllInspirationArticles(user.id);
//   };

//   useEffect(() => {
//     singleArticle(setEditInspirationArticle);
//   }, [id]);

//   return (
//     <div>
//       <section>
//         <InspirationArticleForm user={user} articleObj={editInspirationArticle} onUpdate={allArticles} />
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleInspirationArticle } from '../../../utils/data/inspirationArticleData';
import InspirationArticleForm from '../../../components/forms/InspirationArticleForm';

export default function EditInspirationArticle() {
  const [editInspirationArticle, setEditInspirationArticle] = useState({});
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;

  useEffect(() => {
    getSingleInspirationArticle(id).then(setEditInspirationArticle);
  }, [user, router, id]);

  return (<InspirationArticleForm user={id} articleObj={editInspirationArticle} />);
}
