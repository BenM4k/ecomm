import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import ear from '../../assets/headphones_b_2.webp';
import { addToCart, addCount, removeCount } from '../../redux/slices/products/productSlice';

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
            <img src={ear} alt="" />
          </div>
          <div className='partTwo'>
            <h1>{ product.name }</h1>
            <p>{product.desc}</p>
            <span>${product.price}</span>
            <span>Quantity:</span>
            <p className='quantity'>
              <span onClick={() => dispatch(addCount(product))}>
                <AiOutlinePlus />
                </span>
              <span className='quant'>{product.itemCount}</span>
              <span onClick={() => dispatch(removeCount(product))}>
                <AiOutlineMinus />
              </span>
            </p>

            <div className="btn-container">
              <button type="button" onClick={() => dispatch(addToCart(product))}>add to cart</button>
              <button type="button">buy now</button>
            </div>
        </div>

        </div> : ''
      ))}
    </div>
  )
}

export default ProductDetails