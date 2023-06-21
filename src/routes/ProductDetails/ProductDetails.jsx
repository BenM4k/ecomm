import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import ear from '../../assets/headphones_b_2.webp';

import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
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
              <span><AiOutlinePlus /></span>
              <span className='quant'>0</span>
              <span><AiOutlineMinus /></span>
            </p>
        </div>

        </div> : ''
      ))}
    </div>
  )
}

export default ProductDetails