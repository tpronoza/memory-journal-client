import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { deleteListItemData } from '../../utils/data/listItemData';
import { getItems } from '../../utils/data/itemData';
import { getListsById } from '../../utils/data/listData';
import DropDown from '../../components/Dropdown';

export default function ViewItemDetail() {
  const [listDetail, setListDetail] = useState({});
  const [, setItems] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const getOneList = () => {
    getListsById(id).then(setListDetail);
  };
  const getContent = () => {
    getItems(id).then((data) => setItems(data));
  };
  // console.warn(listDetail);

  const removeFromList = (click, itemId) => {
    click.preventDefault();
    deleteListItemData(itemId).then(() => router.push('/lists'));
  };

  useEffect(() => {
    getOneList();
    getContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <Card.Img variant="top" src={listDetail.image} alt={listDetail.name} style={{ height: '500px' }} />
        </div>
        <div className="text-black ms-5 details">
          <h5>Name: {listDetail.name}
          </h5>
          <p>Description: {listDetail.description}</p>
        </div>
      </div>
      <div className="tDisplay">
        <Col className="tDisplay" xs>
          <div className="d-flex flex-wrap">
            {listDetail?.items?.map((item) => (
              <section key={`item--${item.id}`} className="items">

                <DropDown
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  onUpdate={getContent}
                />

                <Button key={item.joined_items[0].id} className="custom-btn" onClick={(click) => removeFromList(click, item.joined_items[0].id)}>
                  Remove from my List
                </Button>
              </section>
            ))}
          </div>
        </Col>
      </div>
    </>
  );
}

// export default function ViewItemDetail() {
//   const [item, setItem] = useState([]);
//   const router = useRouter();
//   const { id } = router.query;
//   const getOneArticle = () => {
//     getItems(id).then(setItem);
//   };

//   useEffect(() => {
//     getOneArticle();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div className="mt-5 d-flex flex-wrap">
//       {item?.map((taco) => (
//         <ItemCard key={taco.id} itemObj={taco.item} onUpdate={setItem} />
//       ))}

//     </div>

//   );
// }
