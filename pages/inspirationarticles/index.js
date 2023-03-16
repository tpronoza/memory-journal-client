import { useEffect, useState } from 'react';
import InspirationArticleCard from '../../components/InspirationArticleCard';
import Search from '../../components/Search';
import { getInspirationArticles } from '../../utils/data/inspirationArticleData';

function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

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
    <div>
      {/* <h3>New Day is a New Beginning</h3> */}
      <Search articles={articles} setFilteredArticles={setFilteredArticles} />
      <section className="all-lists-container">
        {filteredArticles?.map((article) => (
          <InspirationArticleCard key={article.id} articleObj={article} />
        ))}
      </section>
    </div>
  );
}

export default Home;
