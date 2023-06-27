import React from 'react';
import { useSelector } from 'react-redux';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { urlFor } from '../../Client';

import './Home.scss';
import '@splidejs/react-splide/css';

const Home = () => {
  const { products, error, loadingProducts } = useSelector((store) => store.product);

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
    </>

  )
}

export default Home