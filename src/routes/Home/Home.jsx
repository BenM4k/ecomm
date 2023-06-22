import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import ear from '../../assets/headphones_b_2.webp';
import { NavLink } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  const products = useSelector((store) => store.product.products);
  return (
    <>
      <div className='hero-banner'></div>
      <motion.main
        className='main-container'
        whileInView={{ opacity: [0, 0, 0, 0, 1 ]}}
        transition={{ duration: 1 }}
      >
        <ul className='product-list'>
          {products.map(product => (
            <motion.li
              key={product.id}
              className='product'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <NavLink to={`/product/${product.id}`} className="product-link">
              <img src={ear} alt={product.name} className='product-image'/>
              <h2 className='product-name'>{product.name}</h2>
              <span className='product-price'>${product.price}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </motion.main>
    </>

  )
}

export default Home