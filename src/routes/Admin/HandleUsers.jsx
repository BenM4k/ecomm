import { useSelector, useDispatch } from 'react-redux';
import { useDeleteUserMutation, selectAllUsers } from '../../redux/slices/users/userSlice';
import { FaEdit} from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';

const HandleUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const [ deleteUser ] = useDeleteUserMutation();
    const handleDeleteUser = (id) => {
        if (!id) return;
        dispatch(deleteUser(id));
    };
  return (
    <ul>
        {users.map((user, i) => <li key={i}>
            <h4>{user?.firstname} - {user?.lastname}</h4>
            <div className="">
                <button><FiDelete /></button>
                <button onClick={() => handleDeleteUser(user.id)}><FaEdit /></button>
            </div>
        </li>)}
    </ul>
  )
}

export default HandleUsers;