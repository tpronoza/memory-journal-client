import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import InspirationArticleCard from '../../components/InspirationArticleCard';
import Search from '../../components/Search';
import { getInspirationArticles } from '../../utils/data/inspirationArticleData';

function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const router = useRouter();

  const getAllTheArticles = () => {
    getInspirationArticles().then((articleArray) => {
      setArticles(articleArray);
      setFilteredArticles(articleArray);
    });
  };

  useEffect(() => {
    getAllTheArticles();
  }, []);

  return (
    <article>
      <Button
        onClick={() => {
          router.push('/inspirationarticles/new');
        }}
      >
        Add New Article
      </Button>
      <div>
        <Search articles={articles} setFilteredArticles={setFilteredArticles} />
        <section className="all-lists-container">
          {filteredArticles?.map((article) => (
            <InspirationArticleCard key={article.id} articleObj={article} onUpdate={getAllTheArticles} />
          ))}
        </section>
      </div>
    </article>

  );
}

export default Home;
