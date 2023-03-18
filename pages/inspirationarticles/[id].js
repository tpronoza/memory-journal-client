import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getSingleInspirationArticle } from '../../utils/data/inspirationArticleData';

export default function ViewInspirationArticleDetail() {
  const [articleDetail, setArticleDetail] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const getOneArticle = () => {
    getSingleInspirationArticle(id).then(setArticleDetail);
  };

  useEffect(() => {
    getOneArticle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Card.Img variant="top" src={articleDetail.image} alt={articleDetail.name} style={{ height: '500px' }} />
        {/* <img src={articleDetail.image} alt={articleDetail.name} /> */}
      </div>
      <div className="text-black ms-5 details">
        <h5>
          {articleDetail.name}
        </h5>
        <p>Description: {articleDetail.description}</p>
      </div>
      <Link href={`/inspirationarticles/${id}`} passHref>
        <Button size="sm" variant="dark">
          {/* Add an Article */}
        </Button>
      </Link>
    </div>

  );
}
