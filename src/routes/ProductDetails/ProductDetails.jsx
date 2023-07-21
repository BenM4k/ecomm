import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlineStar, AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { addToCart } from '../../redux/slices/cart/cartSlice';
import phone from '../../assets/pngimg.com - iphone_14_PNG24.png';
// import { urlFor } from '../../Client';

import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.products);
  const product = products.find(product => product._id === id);
  const cat = product?.category;
  const SuggestedProducts = products?.filter((product) => product.category === cat);

  return (
    <div className='product-detail-container'>
      <div className="container" key={product._id}>
        <div className='partOne'>
          <div className="main-img">
            {/* <img src={urlFor(product.imageurl).url()} alt="" /> */}
            <img src={phone} alt="phone" />
          </div>
        </div>
        <div className='partTwo'>
          <NavLink to="/store" className='back-home'>
            <BiChevronLeft />
            <p>back to store</p>
          </NavLink>
          <div className="product-details">
            <div className="details-head">
              <h2>{product.title}</h2>
              <p className='product-details-price'>${product.price}</p>
            </div>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className='product-details-desc'>{product.description}</p>
          </div>
          <div className="btn-container">
            <button
              type="button"
              onClick={() => dispatch(addToCart(product))}
              className='cart-btn'
            >
              <AiOutlineShoppingCart />
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="suggested-products">
        <h2>In the same category</h2>
        <ul>
          {SuggestedProducts.map((product) => (
            <li key={product._id}>
              <NavLink to={`/product/${product._id}`}>
                <h4>{product.title}</h4>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductDetails