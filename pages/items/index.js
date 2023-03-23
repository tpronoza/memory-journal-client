import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getItems } from '../../utils/data/itemData';
import ItemCard from '../../components/ItemCard';

function ItemsPage() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const getContent = () => {
    getItems().then((data) => setItems(data));
  };

  useEffect(() => {
    getContent();
  }, []);
  // console.warn(items);
  return (
    <article className="articles">
      <h1>Items</h1>
      <Button
        onClick={() => {
          router.push('/items/new');
        }}
        size="lg"
        variant="dark"
      >
        Post an Item
      </Button>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <section key={`item--${item.id}`} className="items">
            <ItemCard
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              onUpdate={getContent}
            />
          </section>
        ))}
      </div>
    </article>
  );
}

export default ItemsPage;
