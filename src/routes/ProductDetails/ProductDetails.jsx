import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlineStar, AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { addToCart } from '../../redux/slices/products/productSlice';
import { urlFor } from '../../Client';

import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.products);

  return (
    <div className='product-detail-container'>
      {products.map(product => (
        product._id === id ?
          <div className="container" key={product._id}>
            <div className='partOne'>
              <div className="main-img">
                <img src={urlFor(product.imageurl).url()} alt="" />
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

          </div> : ''
      ))}
    </div>
  )
}

export default ProductDetails