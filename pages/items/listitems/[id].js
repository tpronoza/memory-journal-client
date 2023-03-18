import ListItemForm from '../../../components/forms/ListItemForm';
import { useAuth } from '../../../utils/context/authContext';

const NewItemList = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Add Item to the List</h2>
      <ListItemForm user={user} />
    </div>
  );
};

export default NewItemList;
