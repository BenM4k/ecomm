import { useSelector } from 'react-redux';
import { memo } from 'react'
import { selectAllUsers } from '../../redux/slices/users/userSlice';
import { selectAllProducts } from '../../redux/slices/products/productSlice';
import { selectAllBanners } from '../../redux/slices/banners/banners';
import { selectAllCategories } from '../../redux/slices/category/category';
import { FaUser, FaClipboardCheck, FaImage } from 'react-icons/fa';
import {TbCategory} from 'react-icons/tb';
import {BsFillBagCheckFill} from 'react-icons/bs';

const Records = () => {
    const orders = useSelector((store) => store.order);
    const banners = useSelector(selectAllBanners);
    const categories = useSelector(selectAllCategories);
    const users = useSelector(selectAllUsers);
    const products = useSelector(selectAllProducts);

  return (
    <ul className="dashboard-details">
        <li>
            <FaUser />
            <p>{users?.length}</p>
            <span>Users</span>
        </li>
        <li>
            <TbCategory />
            <p>{categories?.length}</p>
            <span>Categories</span>
        </li>
        <li>
            <FaClipboardCheck />
            <p>{orders?.length}</p>
            <span>Orders</span>
        </li>
        <li>
            <FaImage />
            <p>{banners?.length}</p>
            <span>Banners</span>
        </li>
        <li>
            <BsFillBagCheckFill />
            <p>{products?.length}</p>
            <span>Products</span>
        </li>
    </ul>
  )
}

export default memo(Records);