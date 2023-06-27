import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { urlFor } from '../../Client';
import { NavLink } from 'react-router-dom';

import './Home.scss';
import '@splidejs/react-splide/css';

const Home = () => {
  const { products, error, loadingProducts } = useSelector((store) => store.product);
  const liVariant = {
    start: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
      }
    },
  };
  const navVariant = {
    start: { opacity: 1 },
    hover: { opacity: 1 },
  }
  const childVariant = {
    start: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'tween',
      }
    },
  }
  const imgVariant = {
    start: { y: '30px' },
    hover: {
      y: '-10px',
      transition: {
        duration: 0.4,
        type: 'tween',
      }
    },
  }

  if (error) {
    return <h1>Failed to fetch products</h1>
  }
  if (loadingProducts) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className='hero-banner'>
        <Splide
          aria-label='My favorite image'
          hasTrack={false}
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
          }}
        >
          <div className="custom-wrapper">
            <SplideTrack>
              {products.map(product => (
                <SplideSlide key={product._id}>
                  <div className="carousel-container">
                    <img src={urlFor(product.imageurl).url()} alt={product.title} />
                    <div className="carousel-body">
                      <h1 className='carousel-header'>{product.title}</h1>
                      <div className="ai-stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </div>
                      <p className='carousel-text'>{product.description}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>

          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>

      <motion.main
        className='main-container'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      >
        <h1>Our <span>Top Sales</span></h1>
        <ul className='product-list'>
          {products.map(product => (
            <motion.li
              key={product._id}
              className='product'
              variants={liVariant}
              initial="start"
              whileHover="hover"
            >
              <NavLink
                to={`/product/${product._id}`}
                className="product-link"
                variants={navVariant}
                initial="start"
                hover="hover"
              >
                {console.log()}
                <motion.img
                  src={urlFor(product.imageurl).url()}
                  alt={product.title}
                  className='product-image'
                  variants={imgVariant}
                />
                <motion.h2
                  className='product-name'
                  variants={childVariant}
                >
                  {product.title}
                </motion.h2>
                <motion.span
                  className='product-price'
                  variants={childVariant}
                >
                  ${product.price}
                </motion.span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </motion.main>
    </>

  )
}

export default Home