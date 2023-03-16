/* eslint-disable @next/next/no-img-element */
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
import { getLists } from '../../utils/data/listData';
// import { getSingleUser } from '../../utils/data/userData';
// import { createListItemData } from '../../utils/data/listItemData';
// import { useAuth } from '../../utils/context/authContext';
import ListCard from '../../components/ListCard';

export default function ViewList() {
  // const [listDetail, setListDetail] = useState([]);
  const [lists, setLists] = useState([]);
  // const [userData, setUserData] = useState({});
  // const router = useRouter();
  // const { id } = router.query;
  // const { user } = useAuth();

  const getContent = () => {
    getLists().then((data) => setLists(data));
  };

  // const getThisList = () => {
  //   getLists(id).then(setListDetail);
  //   getSingleUser(user.id).then(setUserData);
  // };

  // const addToCollection = () => {
  //   createListItemData(user.id, id).then(() => router.push('/'));
  // };

  useEffect(() => {
    getContent();
  }, []);

  console.warn(lists);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {lists?.map((stuff) => (
          <section key={`stuff--${stuff.id}`} className="lists">
            <ListCard
              id={stuff.id}
              category={stuff.category}
              title={stuff.title}
              image_url={stuff.image_url}
              description={stuff.description}
              onUpdate={getContent}
            />
          </section>
          // <ListCard key={stuff.id} listObj={stuff.item} onUpdate={getContent} />
        ))}
      </div>
    </div>
  );
}

// /* eslint-disable @next/next/no-img-element */
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// // import Link from 'next/link';
// import { getLists } from '../../utils/data/listData';
// import { getSingleUser } from '../../utils/data/userData';
// import { createListItemData } from '../../utils/data/listItemData';
// import { useAuth } from '../../utils/context/authContext';
// import ListCard from '../../components/ListCard';

// export default function ViewList() {
//   const [listDetail, setListDetail] = useState([]);
//   const [lists, setLists] = useState([]);
//   // const [userData, setUserData] = useState({});
//   const router = useRouter();
//   const { id } = router.query;
//   const { user } = useAuth();

//   const getContent = () => {
//     getLists().then((data) => setLists(data));
//   };

//   // const getThisList = () => {
//   //   getLists(id).then(setListDetail);
//   //   getSingleUser(user.id).then(setUserData);
//   // };

//   const addToCollection = () => {
//     createListItemData(user.id, id).then(() => router.push('/'));
//   };

//   useEffect(() => {
//     getContent();
//   }, []);

//   return (
//     <div className="mt-5 d-flex flex-wrap">
//       <div className="d-flex flex-column">
//         <img src={listDetail.thumbnail} alt={listDetail.title} />
//       </div>
//       <div className="text-black ms-5 details">
//         <h5>
//           {listDetail.title}
//         </h5>
//         <p>Description: {listDetail.description}</p>
//         <>
//           {userData?.lists?.find((list) => list.id === listDetail.id) ? null : (
//             <Button className="custom-btn" onClick={addToCollection}>Add A  New List</Button>
//           )}
//         </>
//         <div>
//           <div className="d-flex flex-wrap">
//             {lists?.map((stuff) => (
//               <ListCard key={stuff.id} listObj={stuff.item} onUpdate={getContent} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
