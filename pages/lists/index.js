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
        size="lg"
        variant="dark"
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
