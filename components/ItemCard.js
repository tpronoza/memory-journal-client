import React from 'react';
import PropTypes from 'prop-types';
// import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { viewItem, dropItem } from '../utils/data/listData';
import { deleteItem } from '../utils/data/itemData';

function ItemCard({
  name,
  image,
  description,
  id,
  onUpdate,
}) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteItem(id).then(() => onUpdate());
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
        </ul>
        <Link href={`/items/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/items/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisItem} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ItemCard;

// function ItemCard({
//   itemObj, onUpdate, listObj,
// }) {
//   const deleteThisItem = () => {
//     if (window.confirm(`Remove ${itemObj.description}`)) {
//       deleteItem(itemObj?.id).then(() => onUpdate());
//     }
//   };

//   const payload = { item_id: itemObj?.id };

//   const watchThisItem = () => {
//     viewItem(listObj.id, payload).then(() => onUpdate(listObj.id));
//   };

//   const dropThisItem = () => {
//     dropItem(listObj.id, payload).then(() => onUpdate(listObj.id));
//   };
//   return (
//     <Card className="itemCard" style={{ width: '18rem', margin: '10px' }}>
//       <Card.Body>
//         <h1>{itemObj?.description}</h1>
//         <h3>{itemObj?.image}</h3>
//         <Button onClick={watchThisItem}> add </Button>
//         <Button onClick={dropThisItem}> remove </Button>
//         <Link href={`/edit/${itemObj?.id}`} passHref>
//           <Button
//             variant=""
//             className="editItem"
//           >
//             {/* Edit Item */}
//           </Button>
//         </Link>
//         <Button
//           variant=""
//           onClick={deleteThisItem}
//         >
//           {/* Delete Item */}
//         </Button>
//         <Link href={`/${itemObj?.id}`} passHref>
//           <Button className="viewBtn">Details</Button>
//         </Link>

//       </Card.Body>
//     </Card>
//   );
// }

// ItemCard.propTypes = {
//   listObj: PropTypes.shape({
//     name: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     id: PropTypes.number,
//   }).isRequired,
//   itemObj: PropTypes.shape({
//     id: PropTypes.number,
//     description: PropTypes.string,
//     image: PropTypes.string,
//   }).isRequired,
//   user: PropTypes.shape({
//     id: PropTypes.number,
//     uid: PropTypes.string,
//     firstName: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default ItemCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Image from 'react-bootstrap/Image';
// import Link from 'next/link';
// import Card from 'react-bootstrap/Card';

// function ItemCard({ itemObj }) {
//   return (
//     <div className="item-cards">
//       <Link passHref href={`/items/${itemObj.id}`}>
//         <Image src={itemObj.image} alt={itemObj.description} width="140" height="200" />
//         <Card.Title>{itemObj.description}</Card.Title>
//       </Link>
//     </div>
//   );
// }

// ItemCard.propTypes = {
//   itemObj: PropTypes.shape({
//     id: PropTypes.number,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     user: PropTypes.shape({
//       id: PropTypes.number,
//       firstName: PropTypes.string,
//     }),
//   }).isRequired,
// };

// export default ItemCard;
