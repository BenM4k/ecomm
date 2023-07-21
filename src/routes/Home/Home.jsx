import React from 'react';
import { useSelector } from 'react-redux';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import { urlFor } from '../../Client';

import './Home.scss';
import '@splidejs/react-splide/css';
import circle from '../../assets/circle.svg';

const Home = () => {
  const { error, loadingProducts } = useSelector((store) => store.product);
  const banner = useSelector((store) => store.banner);

  return (
    <>
      <div className='hero-banner'>
        {error ? <h2 className='failed'>{error}</h2>
          : loadingProducts ? <h1 className='load'>Loading...</h1>
            : <>
              <img src={circle} className='circle' alt="circle" />
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
                    {banner?.map((item, index) => (
                      <SplideSlide key={index}>
                        <div className="carousel-container">
                          {/* <img src={urlFor(product.imageurl).url()} alt={product.title} /> */}
                          <div className="carousel-body">
                            <img src={item} alt={`banner-${index}`} />
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                </div>

                <div className="splide__progress">
                  <div className="splide__progress__bar" />
                </div>
              </Splide></>
        }
      </div>
    </>

  )
}

export default Home