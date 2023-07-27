import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useSelector, useDispatch } from 'react-redux';
import UploadProduct from '../../components/UploadProduct';
import { addCategory } from '../../redux/slices/category/category';
import { addBanner } from '../../redux/slices/banners/banners';
import Category from '../../models/categoryModel';
import Banner from '../../models/bannerModel';
import './Admin.scss';
import photo from '../../assets/pexels-nappy-935985.jpg';
import { FaEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    const dispatch = useDispatch();
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState();
    const fakeUsers = [
        {
            firstname: "ben",
        },
        {
            firstname: "Jane",
        },
        {
            firstname: "Glenn",
        },
        {
            firstname: "Mane",
        },
    ];
    const [cat, setCat] = useState("");
    const [catDesc, setCatDesc] = useState("");
    const [categoryError, setCategoryError] = useState("");

    //banner handler
    const [bannerTitle, setBannerTitle] = useState("");
    const [bannerDesc, setBannerDesc] = useState("");
    const [bannerError, setBannerError] = useState("");

    const orders = useSelector((store) => store.order);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                isMounted && setUsers(response.data);
            } catch (err) {
                console.log(err);
                // navigate('/sign-in', { state: { from: location }, replace: true });
            }
        }

        getUsers()

        return () => {
            isMounted = false;
            controller.abort();
        }
    })

    const handleAddCategory = () => {
        const newCategory = new Category(cat, catDesc);
        const validatedCategory = newCategory.validate();
        if (validatedCategory.length > 0) {
            setCategoryError(validatedCategory[0])
        } else {
            dispatch(addCategory(newCategory))
            setCategoryError("");
            setCat("");
            setCatDesc("");
        }
    }

    const handleAddBanner = () => {
        const newBanner = new Banner(bannerTitle, bannerDesc, photo);
        const validateBanner = newBanner.validate();

        if (validateBanner.length > 0) {
            validateBanner.forEach((error) => {
                setBannerError(error)
            })
        } else {
            dispatch(addBanner(newBanner))
            setBannerError("");
            setBannerTitle("");
            setBannerDesc("");
            console.log("new banner created")
        }
    }
    return (
        <div className='admin-wrapper'>
            <div className="list-and-create-product">
                <div className="users">
                    <h2>Users List</h2>
                    {users?.length
                        ? (
                            <ul>
                                {users.map((user, i) => <li key={i}>
                                    <h4>{user?.firstname}</h4>
                                    <button><FiDelete /></button>
                                    <button><FaEdit /></button>
                                </li>)}
                            </ul>
                        ) : (
                            <ul>
                                {fakeUsers.map((user, i) => <li key={i}>
                                    <h4>{user?.firstname}</h4>
                                    <button><FiDelete /></button>
                                    <button><FaEdit /></button>
                                </li>)}
                            </ul>
                        )
                    }
                </div>
                <div>
                    <UploadProduct />
                </div>
                <div className="add-category">
                    <h2>Add a category</h2>
                    <label htmlFor="">Title:</label>
                    <input type='text' value={cat} onChange={(e) => setCat(e.target.value)} />
                    <label htmlFor="">Description:</label>
                    <input type='text' value={catDesc} onChange={(e) => setCatDesc(e.target.value)} />
                    <button type="button" onClick={handleAddCategory}>Add category</button>
                    <span style={{ color: 'red' }}>{categoryError}</span>
                </div>

                <div className="add-category">
                    <h2>Add a banner</h2>
                    <label>Banner header</label>
                    <input type='text' value={bannerTitle} onChange={(e) => setBannerTitle(e.target.value)} />
                    <label>Banner description</label>
                    <input type='text' value={bannerDesc} onChange={(e) => setBannerDesc(e.target.value)} />
                    <button type="button" onClick={handleAddBanner}>Add a banner</button>
                    <span style={{ color: 'red' }}>{bannerError}</span>
                </div>
            </div>

            <div className='users-orders'>
                <h2>Users Orders</h2>
                <div className="orders">
                    <ul>
                        {orders.map((order) => (
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
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Admin