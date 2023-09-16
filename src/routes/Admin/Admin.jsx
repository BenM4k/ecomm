import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleEditBanner, toggleEditCategory } from '../../redux/slices/modals/modals';
import { editBanner, deleteBanner } from '../../redux/slices/banners/banners';
import UploadProduct from '../../components/Add/UploadProduct';
import AddCategory from '../../components/Add/addCategory';
import AddBanner from '../../components/Add/AddBanner';
import EditBanner from '../../components/Modals/EditBanner';
import { editCategory, deleteCategory } from '../../redux/slices/category/category';
import EditCategory from '../../components/Modals/EditCategory';
import { deleteUser } from '../../redux/slices/users/userSlice';
import './Admin.scss';
import {BsFillBagCheckFill} from 'react-icons/bs';
import {TbCategory} from 'react-icons/tb';
import { FaEdit, FaUser, FaClipboardCheck, FaImage } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    const myList = [
        {
            name: 'Users',
            pic: <FaUser />,
        },
        {
            name: 'Categories',
            pic: <TbCategory />,
        },
        {
            name: 'Orders',
            pic: <FaClipboardCheck />,
        },
        {
            name: 'Banners',
            pic: <FaImage />,
        },
        {
            name: 'Products',
            pic: <BsFillBagCheckFill />,
        }
    ]
    const [activeTab, setActiveTab] = useState('users');

    const dispatch = useDispatch();
    const orders = useSelector((store) => store.order);
    const banners = useSelector((store) => store.banner);
    const categories = useSelector((store) => store.category);
    const { users } = useSelector((store) => store.user);
    const { products } = useSelector((store) => store.product);

    const handleDeleteUser = (id) => {
        if (!id) return;
        dispatch(deleteUser(id));
    }

    const handleEditCategory = (id) => {
        dispatch(toggleEditCategory());
        dispatch(editCategory(id));
    }

    const handleDisplay = (category) => {
        setActiveTab(category)
    }
    
    return (
        <div className='admin-wrapper'>
            <div className="nav-list">
                {myList.map((list) => (
                    <button
                        key={list.name}
                        onClick={() => handleDisplay(list?.name.toLowerCase())}
                        className={activeTab === list?.name.toLowerCase() ? 'active' : ''}
                    >
                        {list.pic}
                        <span>{list.name}</span>
                    </button>
                ))}
            </div>

            <div className="list-and-create-product">
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

                {activeTab === 'users' && (
                    <div className="users">
                        <div className="dash-head">
                            <FaUser />
                            <h2>Users List</h2>
                        </div>
                        {users?.length
                            ? (
                                <ul>
                                    {users.map((user, i) => <li key={i}>
                                        <h4>{user?.firstname}</h4>
                                        <div className="">
                                            <button><FiDelete /></button>
                                            <button onClick={() => handleDeleteUser(user.id)}><FaEdit /></button>
                                        </div>
                                    </li>)}
                                </ul>
                            ) : <p>No users to display</p>
                        }
                    </div>
                )}

                {activeTab === 'products' && (
                    <div>
                        <div className="dash-head">
                            <BsFillBagCheckFill />
                            <h2>Products List</h2>
                        </div>
                        <UploadProduct />
                    </div>
                )}

                {activeTab === 'categories' && (
                    <div className='admin-cat'>
                        <div className="dash-head">
                            <TbCategory />
                            <h2>Categories List</h2>
                        </div>
                        <ul className="admin-categories">
                            {categories.map((category) => (
                                <li key={category._id}>
                                    <h3>{category.title}</h3>
                                    <p>{category.desc}</p>
                                    <div className="buttons">
                                        <button onClick={() => {
                                            dispatch(deleteCategory(category._id));
                                        }}><FiDelete /></button>
                                        <button onClick={() => handleEditCategory(category._id)}><FaEdit /></button>
                                    </div>
                                    <div className="">
                                        <EditCategory category={category} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="add-category">
                            <AddCategory />
                        </div>
                    </div>
                )}

                {activeTab === 'banners' && (
                    <div className='dash-banners'>
                            <div className="dash-head">
                                <FaImage />
                                <h2>Banners List</h2>
                            </div>
                        <ul className="admin-banners">
                            {banners?.map((banner) => (
                                <li key={banner.title}>
                                    <img src={banner.img} alt={banner.title} />
                                    <div className="admin-banner-desc">
                                        <h3>{banner.title}</h3>
                                        <p>{banner.desc}</p>
                                    </div>
                                    <div className="buttons">
                                        <button onClick={() => {
                                            dispatch(deleteBanner(banner.id));
                                        }}><FiDelete /></button>
                                        <button onClick={() => {
                                            dispatch(editBanner(banner.id));
                                            dispatch(toggleEditBanner());
                                        }}><FaEdit /></button>
                                    </div>
                                    <div className="">
                                        <EditBanner />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="add-category">
                            <AddBanner />
                        </div>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className='users-orders'>
                        <div className="dash-head">
                            <FaClipboardCheck />
                            <h2>Orders List</h2>
                        </div>
                        <div className="orders">
                            <ul>
                                {orders.length ? orders?.map((order) => (
                                    <li key={order?.id} className='order-list'>
                                        <div className="order-user flex-center">
                                            <h4>User</h4>
                                            <p>{order.customerName}</p>
                                        </div>
                                        <div className="order-id flex-center">
                                            <h4>id</h4>
                                            <NavLink to={`/order/${order.id}`}>{order.id}</NavLink>
                                        </div>
                                        <div className="order-status flex-center">
                                            <h4>Status</h4>
                                            <p>{order.status}</p>
                                        </div>
                                        <div className="order-total flex-center">
                                            <h4>Total</h4>
                                            <p>{order.total}</p>
                                        </div>
                                        <button><FiDelete /></button>
                                    </li>
                                )) : <p>No orders to display</p>}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Admin