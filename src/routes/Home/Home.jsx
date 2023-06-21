import React from 'react';
import { useSelector } from 'react-redux';
import ear from '../../assets/headphones_b_2.webp';
import { NavLink } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  const products = useSelector((store) => store.product.products);
  return (
    <>
      <div className='hero-banner'></div>
      <main className='main-container'>
        <ul className='product-list'>
          {products.map(product => (
            <li key={product.id} className='product'>
              <NavLink to={`/product/${product.id}`} className="product-link">
              <img src={ear} alt={product.name} className='product-image'/>
              <h2 className='product-name'>{product.name}</h2>
              <p className='product-desc'>{product.desc}</p>
              <span>${product.price}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </main>
    </>

  )
}

export default Home