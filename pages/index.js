import { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import Search from '../components/Search';
import { getItems } from '../utils/data/itemData';

function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const getAllTheItems = () => {
    getItems().then((itemArray) => {
      setItems(itemArray);
      setFilteredItems(itemArray);
    });
  };

  useEffect(() => {
    getAllTheItems();
  }, []);

  return (
    <div>
      <h3>Escape Your World: Dive Into Another One</h3>
      <Search items={items} setFilteredItems={setFilteredItems} />
      <section className="all-items-container">
        {filteredItems?.map((item) => (
          <ItemCard key={item.id} itemObj={item} />
        ))}
      </section>
    </div>
  );
}

export default Home;
