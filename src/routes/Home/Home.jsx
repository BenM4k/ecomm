import React from 'react';
import { useSelector } from 'react-redux';
import './Home.scss';

const Home = () => {
  const products = useSelector((store) => store.product);
  return (
    <>
      <main className='main-container'>
        <ul className='product-list'>
          {products.map(product => (
            <li key={product.id} className='product'>
              <img src={product.image} alt={product.name} className='product-image'/>
              <h2 className='product-name'>{product.name}</h2>
              <p className='product-desc'>{product.desc}</p>
            </li>
          ))}
        </ul>
      </main>
    </>

  )
}

export default Home