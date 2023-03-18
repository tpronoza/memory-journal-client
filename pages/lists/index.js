import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getLists } from '../../utils/data/listData';
import ListCard from '../../components/ListCard';

export default function ViewList() {
  const [lists, setLists] = useState([]);
  const router = useRouter();
  const getContent = () => {
    getLists().then((data) => setLists(data));
  };

  useEffect(() => {
    getContent();
  }, []);
  // console.warn(lists);
  return (
    <article className="lists">
      <h1>Lists</h1>
      <Button
        onClick={() => {
          router.push('/lists/new');
        }}
      >
        Create a List
      </Button>
      <div className="d-flex flex-wrap">
        {lists.map((list) => (
          <section key={`list--${list.id}`} className="list">
            <ListCard
              id={list.id}
              name={list.name}
              image={list.image}
              description={list.description}
              items={list.items}
              onUpdate={getContent}
            />
          </section>
        ))}
      </div>
    </article>
  );
}

//   useEffect(() => {
//     getContent();
//   }, []);

//   console.warn(lists);

//   return (
//     <div>
//       <div className="d-flex flex-wrap">
//         {lists?.map((stuff) => (
//           <section key={`stuff--${stuff.id}`} className="lists">
//             <ListCard
//               id={stuff.id}
//               category={stuff.category}
//               name={stuff.name}
//               image={stuff.image}
//               description={stuff.description}
//               onUpdate={getContent}
//             />
//           </section>
//           // <ListCard key={stuff.id} listObj={stuff.item} onUpdate={getContent} />
//         ))}
//       </div>
//     </div>
//   );
// }

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

//   const addToList = () => {
//     createListItemData(user.id, id).then(() => router.push('/'));
//   };

//   useEffect(() => {
//     getContent();
//   }, []);

//   return (
//     <div className="mt-5 d-flex flex-wrap">
//       <div className="d-flex flex-column">
//         <img src={listDetail.thumbnail} alt={listDetail.name} />
//       </div>
//       <div className="text-black ms-5 details">
//         <h5>
//           {listDetail.name}
//         </h5>
//         <p>Description: {listDetail.description}</p>
//         <>
//           {userData?.lists?.find((list) => list.id === listDetail.id) ? null : (
//             <Button className="custom-btn" onClick={addToList}>Add A  New List</Button>
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
