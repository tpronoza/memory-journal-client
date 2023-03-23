import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import InspirationArticleCard from '../components/InspirationArticleCard';
// import Search from '../components/Search';
import { getInspirationArticles } from '../utils/data/inspirationArticleData';

function Home() {
  // const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const router = useRouter();

  const getAllTheArticles = () => {
    getInspirationArticles().then((articleArray) => {
      // setArticles(articleArray);
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
        size="lg"
        variant="dark"
      >
        Add New Article
      </Button>
      <section className="all-lists-container">
        <div className="d-flex flex-wrap">
          {/* <h3>New Day is a New Beginning</h3> */}
          {/* <Search articles={articles} setFilteredArticles={setFilteredArticles} /> */}

          {filteredArticles?.map((article) => (
            <InspirationArticleCard key={article.id} articleObj={article} />
          ))}

        </div>
      </section>
    </article>
  );
}

export default Home;

// // import { Button } from 'react-bootstrap';
// // import { signOut } from '../utils/auth';
// // import { useAuth } from '../utils/context/authContext';

// // function Home() {
// //   const { user } = useAuth();
// //   return (
// //     <div
// //       className="text-center d-flex flex-column justify-content-center align-content-center"
// //       style={{
// //         height: '90vh',
// //         padding: '30px',
// //         maxWidth: '400px',
// //         margin: '0 auto',
// //       }}
// //     >
// //       <h1>Hello {user.fbUser.displayName}! </h1>
// //       <p1>Welcome</p1>
// //       <p>Click the button below to logout!</p>
// //       <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
// //         Sign Out
// //       </Button>
// //     </div>
// //   );
// // }

// // export default Home;

// import { useEffect, useState } from 'react';
// import CategoryFilterButton from '../components/CategoryFilter';
// import ListCard from '../components/ListCard';
// import ListSearch from '../components/ListSearch';
// import { getCategories } from '../utils/data/categoryData';
// import { getLists } from '../utils/data/listData';

// function Home() {
//   const [filteredLists, setFilteredLists] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState([]);
//   const [lists, setLists] = useState([]);
//   const getAllLists = () => {
//     getLists().then((listArr) => {
//       setFilteredLists(listArr);
//       setLists(listArr);
//     });
//   };

//   useEffect(() => {
//     getAllLists();
//     getCategories().then(setCategoryFilter);
//   }, []);

//   return (
//     <div>
//       <div className="categoryFilters">
//         {categoryFilter.map((category) => (
//           <CategoryFilterButton key={category.id} catObj={category} />
//         ))}
//       </div>
//       <ListSearch posts={lists} setFilteredPosts={setFilteredLists} />
//       <div>
//         {filteredLists.map((post) => (
//           <ListCard key={post.id} createdOn={post.publication_date} title={post.name} content={post.content} image={post.image} userId={post.user_id} categoryId={post.category_id} id={post.id} onUpdate={getAllLists} />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Home;
