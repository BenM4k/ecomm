import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UploadProduct from '../../components/Add/UploadProduct';
import AddCategory from '../../components/Add/addCategory';
import AddBanner from '../../components/Add/AddBanner';
import { deleteUser } from '../../redux/slices/users/userSlice';
import './Admin.scss';
import { FaEdit, FaUser } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    const [displayUsers, setDisplayUsers] = useState(true);
    const [displayCategories, setDisplayCategories] = useState(false);
    const [displayBanners, setDisplayBanners] = useState(false);
    const [displayOrders, setDisplayOrders] = useState(false);
    const [displayProducts, setDisplayProducts] = useState(false);

    const dispatch = useDispatch();
    const orders = useSelector((store) => store.order);
    const banners = useSelector((store) => store.banner);
    const categories = useSelector((store) => store.category);
    const { users } = useSelector((store) => store.user);

    const handleDeleteUser = (id) => {
        if (!id) return;
        dispatch(deleteUser(id));
    }

    const handleDisplay = (category) => {
        if (category === 'users') {
            setDisplayUsers(true);
            setDisplayBanners(false);
            setDisplayCategories(false);
            setDisplayOrders(false);
            setDisplayProducts(false);
        }
        if (category === 'banners') {
            setDisplayBanners(true);
            setDisplayUsers(false);
            setDisplayCategories(false);
            setDisplayOrders(false);
            setDisplayProducts(false);
        }
        if (category === 'categories') {
            setDisplayCategories(true);
            setDisplayBanners(false);
            setDisplayUsers(false);
            setDisplayOrders(false);
            setDisplayProducts(false);
        }
        if (category === 'orders') {
            setDisplayOrders(true);
            setDisplayBanners(false);
            setDisplayUsers(false);
            setDisplayCategories(false);
            setDisplayProducts(false);
        }
        if (category === 'products') {
            setDisplayProducts(true);
            setDisplayBanners(false);
            setDisplayUsers(false);
            setDisplayCategories(false);
            setDisplayOrders(false);
        }
    }
    return (
        <div className='admin-wrapper'>
            <div className="nav-list" style={{ marginTop: '7rem' }}>
                <button onClick={() => handleDisplay('users')}>
                    <FaUser />
                    <span>User</span>
                </button>
                <button onClick={() => handleDisplay('categories')}>
                    <FaUser />
                    <span>Categories</span>
                </button>
                <button onClick={() => handleDisplay('orders')}>
                    <FaUser />
                    <span>Orders</span>
                </button>
                <button onClick={() => handleDisplay('banners')}>
                    <FaUser />
                    <span>Banners</span>
                </button>
                <button onClick={() => handleDisplay('products')}>
                    <FaUser />
                    <span>Products</span>
                </button>
            </div>

            <div className="list-and-create-product">
                {displayUsers && (
                    <div className="users">
                        <h2>Users List</h2>
                        {users?.length
                            ? (
                                <ul>
                                    {users.map((user, i) => <li key={i}>
                                        <h4>{user?.firstname}</h4>
                                        <button onClick={() => handleDeleteUser(user.id)}><FiDelete /></button>
                                        <button><FaEdit /></button>
                                    </li>)}
                                </ul>
                            ) : <p>No users to display</p>
                        }
                    </div>
                )}

                {displayProducts && (
                    <div>
                        <UploadProduct />
                    </div>
                )}

                {displayCategories && (
                    <>
                        <ul className="admin-categories">
                            <h2>Categories List</h2>
                            {categories.map((category) => (
                                <li key={category._id}>
                                    <h3>{category.title}</h3>
                                    <div className="buttons">
                                        <button><FiDelete /></button>
                                        <button><FaEdit /></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="add-category">
                            <AddCategory />
                        </div>
                    </>
                )}

                {displayBanners && (
                    <>
                        <ul className="admin-banners">
                            <h2>Banners List</h2>
                            {banners?.map((banner) => (
                                <li key={banner.title}>
                                    <img src={banner.img} alt={banner.title} />
                                    <div className="">
                                        <h3>{banner.title}</h3>
                                        <p>{banner.desc}</p>
                                    </div>
                                    <div className="buttons">
                                        <button><FiDelete /></button>
                                        <button><FaEdit /></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="add-category">
                            <AddBanner />
                        </div>
                    </>
                )}

                {displayOrders && (
                    <div className='users-orders'>
                        <h2>Users Orders</h2>
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