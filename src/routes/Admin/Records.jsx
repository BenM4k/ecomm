import { useSelector } from 'react-redux';
import { FaUser, FaClipboardCheck, FaImage } from 'react-icons/fa';
import {TbCategory} from 'react-icons/tb';
import {BsFillBagCheckFill} from 'react-icons/bs';

const Records = () => {
    const orders = useSelector((store) => store.order);
    const banners = useSelector((store) => store.banner);
    const categories = useSelector((store) => store.category);
    const { users } = useSelector((store) => store.user);
    const { products } = useSelector((store) => store.product);

  return (
    <ul className="dashboard-details">
        <li>
            <FaUser />
            <p>{users.length}</p>
            <span>Users</span>
        </li>
        <li>
            <TbCategory />
            <p>{categories.length}</p>
            <span>Categories</span>
        </li>
        <li>
            <FaClipboardCheck />
            <p>{orders.length}</p>
            <span>Orders</span>
        </li>
        <li>
            <FaImage />
            <p>{banners.length}</p>
            <span>Banners</span>
        </li>
        <li>
            <BsFillBagCheckFill />
            <p>{products.length}</p>
            <span>Products</span>
        </li>
    </ul>
  )
}

export default Records;