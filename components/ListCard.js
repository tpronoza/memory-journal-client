/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';
import { deleteList } from '../utils/data/listData';

// function ListCard({ listObj, onUpdate }) {
//   const { user } = useAuth();

//   const deleteThisList = () => {
//     if (window.confirm(`Delete ${listObj.title}`)) {
//       deleteList(listObj?.id).then(() => onUpdate());
//     }
//   };

function ListCard({
  title,
  description,
  imageUrl,
  // categories,
  id,
  onUpdate,
}) {
  const deleteThisList = () => {
    if (window.confirm(`Delete ${title}?`)) {
      deleteList(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Title: {title}</li>
          <li className="list-group-item">Description: {description}</li>
          {/* <li className="list-group-item">Category: {categories?.map((taco) => (
            <p>{`${taco.label}`} </p>
          ))}
          </li> */}
        </ul>
        <Link href={`/lists/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/lists/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisList} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // categories: PropTypes.string.isRequired,
  // items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ListCard;

// /* eslint-disable react/prop-types */
// import React from 'react';
// import PropTypes from 'prop-types';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';
// import { deleteList } from '../utils/data/listData';

// function ListCard({ listObj, onUpdate }) {
//   const { user } = useAuth();

//   const deleteThisList = () => {
//     if (window.confirm(`Delete ${listObj.title}`)) {
//       deleteList(listObj?.id).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card className="card" style={{ width: '20rem', margin: '10px' }}>
//       {/* <Link href=" " passHref>
//         <Card.Img variant="top" src={listObj.image} alt={listObj.title} style={{ height: '400px' }} />
//       </Link> */}
//       <Card.Body>
//         <Card.Title>{listObj?.description}</Card.Title>
//         <p>{listObj.user.id}</p>
//         {listObj.user.uid === user.uid ? (
//           <>
//             <Link href={`/lists/${listObj.id}`} passHref>
//               <Button className="edit">EDIT</Button>
//             </Link>
//             <Button className="delete" onClick={deleteThisList}>
//               DELETE
//             </Button>
//             <Link href={`lists/${listObj?.id}`} passHref>
//               <Button className="viewBtn">Details</Button>
//             </Link>
//             <div className="d-flex flex-wrap">
//               {listObj.categories.map((category) => (
//                 <p> {category.label} </p>
//               ))}
//             </div>
//           </>
//         ) : ''}
//       </Card.Body>
//     </Card>
//   );
// }

// ListCard.propTypes = {
//   listObj: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     image_url: PropTypes.string,
//     id: PropTypes.number,
//     categories: PropTypes.shape({
//       id: PropTypes.number,
//       label: PropTypes.string,
//     }),
//     user: PropTypes.shape({
//       id: PropTypes.number,
//       first_name: PropTypes.string,
//       last_name: PropTypes.string,
//       uid: PropTypes.string,
//     }),
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default ListCard;
