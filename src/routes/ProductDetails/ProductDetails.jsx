import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlineStar, AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import ear from '../../assets/headphones_b_2.webp';
import { addToCart } from '../../redux/slices/products/productSlice';

import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.products);

  return (
    <div className='product-detail-container'>
      {products.map(product =>(
        product.id === id ? 
        <div className="container" key={product.id}>
          <div className='partOne'>
            <div className="main-img">
              <img src={ear} alt="" />
            </div>
            <div className="side-img">
              <img src={ear} alt="" />
              <img src={ear} alt="" />
              <img src={ear} alt="" />
              <img src={ear} alt="" />
            </div>
          </div>
          <div className='partTwo'>
            <NavLink to="/" className='back-home'>
              <BiChevronLeft />
              <p>back home</p>
            </NavLink>
            <div className="product-details">
              <h2>{ product.name }</h2>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className='product-details-price'>${product.price}.00</p>
              <p className='product-details-desc'>{product.desc}</p>
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
              <button type="button" className='buy'>buy now</button>
            </div>
        </div>

        </div> : ''
      ))}
    </div>
  )
}

export default ProductDetails