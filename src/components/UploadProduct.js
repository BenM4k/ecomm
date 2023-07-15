import { useState } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../hooks/useAuth';

import Product from '../models/productModel';

const UploadProduct = () => {
    const { categories } = useSelector((store) => store.product);
    const { auth } = useAuth();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const realPrice = parseFloat(price);
    const [cat, setCat] = useState("");

    const newProduct = new Product(title, description, realPrice, auth?.userInfo?.firstname, cat);
    const productErrors = newProduct.validate();

    if (productErrors.length > 0) {
        productErrors.forEach((product) => {
            console.log(product)
        })
    } else {
        console.log("Product successfully validated");
    }
    return (
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
    )
}

export default UploadProduct