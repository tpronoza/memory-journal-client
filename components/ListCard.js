/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';
import { deleteList } from '../utils/data/listData';

function ListCard({
  name,
  description,
  image,
  items,
  id,
  onUpdate,
}) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteList(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Title: {name}</li>
          <li className="list-group-item">Description: {description}</li>
          <li className="list-group-item">Items: {items?.map((taco) => (
            <p>{`${taco.name}`} </p>
          ))}
          </li>
        </ul>
        <Link href={`/lists/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            View
          </Button>
        </Link>
        <Link href={`/lists/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            Edit
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisItem} className="m-2">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

ListCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
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
//     if (window.confirm(`Delete ${listObj.name}`)) {
//       deleteList(listObj?.id).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card className="card" style={{ width: '20rem', margin: '10px' }}>
//       {/* <Link href=" " passHref>
//         <Card.Img variant="top" src={listObj.image} alt={listObj.name} style={{ height: '400px' }} />
//       </Link> */}
//       <Card.Body>
//         <Card.name>{listObj?.description}</Card.name>
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
//     name: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
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
