import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getItemsById } from '../../utils/data/itemData';

export default function ViewItemDetail() {
  const [itemDetail, setItemDetail] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const getOneItem = () => {
    getItemsById(id).then(setItemDetail);
  };

  useEffect(() => {
    getOneItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Card.Img variant="top" src={itemDetail.image} alt={itemDetail.name} style={{ height: '500px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          {itemDetail.name}
        </h5>
        <p>Description: {itemDetail.description}</p>
        <Link href={`/items/listitems/${id}`} passHref>
          <Button size="sm" variant="info">
            Add to List
          </Button>
        </Link>
      </div>
    </div>

  );
}
