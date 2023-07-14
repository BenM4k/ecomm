import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useSelector } from 'react-redux';
import Product from '../../models/productModel';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState();
    const { auth } = useAuth();

    //handle product
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const realPrice = parseFloat(price);
    const [cat, setCat] = useState("");

    const { categories } = useSelector((store) => store.product);
    const orders = useSelector((store) => store.order);

    const newProduct = new Product(title, description, realPrice, auth?.userInfo?.firstname, cat);
    const productErrors = newProduct.validate();

    if (productErrors.length > 0) {
        productErrors.forEach((product) => {
            console.log(product)
        })
    } else {
        console.log("Product successfully validated");
    }
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

    return (
        <div>
            <div className="users">
                <h2>Users List</h2>
                {users?.length
                    ? (
                        <ul>
                            {users.map((user, i) => <li key={i}>{user?.firstname}</li>)}
                        </ul>
                    ) : <p>No users to display</p>}
            </div>

            <div className="create-product">
                <h2>Create Product</h2>
                <form>
                    <h3>Product name</h3>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <p>Product description</p>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    <p>Product price</p>
                    <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <p>Product Image</p>
                    <input type='file' accept="image/*" />
                    <select name='Product' id='Admin-product' value={cat} onChange={(e) => setCat(e.target.value)}>
                        <option value="">Select a category</option>
                        {categories?.map((category, index) => (
                            <option key={index} value={`${category?.title}`}>{`${category?.title}`}</option>
                        ))}
                    </select>
                    <button type="submit">Add product</button>
                </form>
                <br />
            </div>

            <div>
                <h2>Users Orders</h2>
                <div className="orders">
                    <ul>
                        {orders.map((order) => (
                            <li key={order?.id}>
                                <h2>User: {order.customerName}</h2>
                                <p>Creation date: {order?.createdAt}</p>
                                <p>Status: {order.status}</p>
                                <p>Total: {order.total}</p>
                                <p>Country: {order.shippingDetails[0]}</p>
                                <p>Street: {order.shippingDetails[1]}</p>
                                <p>Street Address: {order.shippingDetails[2]}</p>
                                <p>Road: {order.shippingDetails[3]}</p>
                                <p>Post Code{order.shippingDetails[4]}</p>
                                <br />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="category">
                <h2>Add a category</h2>
                <input type='text' />
                <button type="button">Add category</button>
            </div>

            <NavLink to='/shipping'>ship</NavLink>
        </div >
    )
}

export default Admin