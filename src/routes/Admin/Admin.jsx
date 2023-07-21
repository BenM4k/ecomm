import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import UploadProduct from '../../components/UploadProduct';
import { addCategory } from '../../redux/slices/category/category';
import Category from '../../models/categoryModel';
import './Admin.scss';

const Admin = () => {
    const dispatch = useDispatch();
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState();
    const [cat, setCat] = useState("");
    const [categoryError, setCategoryError] = useState("");

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
    }, [])

    const handleAddCategory = () => {
        const newCategory = new Category(uuid(), cat);
        const validatedCategory = newCategory.validate();
        if (validatedCategory.length > 0) {
            setCategoryError(validatedCategory[0])
        } else {
            dispatch(addCategory(newCategory))
            setCategoryError("");
            setCat("");
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
                                {users.map((user, i) => <li key={i}>{user?.firstname}</li>)}
                            </ul>
                        ) : <p>No users to display</p>}
                </div>
                <div>
                    <UploadProduct />
                </div>
                <div className="add-category">
                    <h2>Add a category</h2>
                    <input type='text' value={cat} onChange={(e) => setCat(e.target.value)} />
                    <button type="button" onClick={handleAddCategory}>Add category</button>
                    <span style={{ color: 'red' }}>{categoryError}</span>
                </div>
            </div>

            <div className='users-orders'>
                <h2>Users Orders</h2>
                <div className="orders">
                    <ul>
                        {orders.map((order) => (
                            <li key={order?.id} className='order-list'>
                                <h3>User: {order.customerName}</h3>
                                <p>Creation date: {order?.createdAt}</p>
                                <p>Status: {order.status}</p>
                                <p>Items : {order.items.length}</p>
                                <ul>
                                    {order.items.map(item => (
                                        <li key={item._id}>
                                            <h3>{item.title}</h3>
                                            <p>{item.price}</p>
                                            <p>Item count: {item.itemCount}</p>
                                        </li>
                                    ))}
                                </ul>
                                <p>Total: {order.total}</p>
                                <p>Country: {order.shippingDetails[0]}</p>
                                <p>Street: {order.shippingDetails[1]}</p>
                                <p>Street Address: {order.shippingDetails[2]}</p>
                                <p>Road: {order.shippingDetails[3]}</p>
                                <p>Post Code: {order.shippingDetails[4]}</p>
                                <br />
                                <p>{order.total}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Admin