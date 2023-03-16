import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Table } from 'react-bootstrap';
import { deleteItem, getItems } from '../../utils/data/itemData';
import TagForm from '../../components/forms/ItemForm';

function ItemsPage() {
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    getItems().then(setItems);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const refresh = () => getAllItems();

  return (
    <>
      <TagForm refresh={refresh} />
      <h2>Items</h2>
      <Table striped bordered hover>
        <tbody>
          {
            items?.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={`/items/edit/${item.id}`} passHref>
                    <Button size="sm" variant="dark">
                      EDIT
                    </Button>
                  </Link>
                  <Button size="sm" variant="danger" onClick={() => deleteItem(item.id).then(() => getAllItems())}>Delete</Button>
                </td>
                <td>{item.description}</td>
                <td>{item.image_url}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
}

export default ItemsPage;
