import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { TbTruckDelivery } from 'react-icons/tb';
import PaginetedHome from '../../components/PaginatedHome/PaginetedHome';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import './Home.scss';
import '@splidejs/react-splide/css';

const Home = () => {
  const { error, loadingProducts, products } = useSelector((store) => store.product);
  const categories = useSelector((store) => store.category);
  const testimonials = useSelector((store) => store.testimonial)
  const showCategories = categories.slice(1, 5);
  const banner = useSelector((store) => store.banner);

  const [currentIndex, setCurrentIndex] = useState(0);

  const test = testimonials[currentIndex];
  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <>
      <section className='hero-banner section'>
        {error ? <h2 className='failed'>{error}</h2>
          : loadingProducts ? <h1 className='load'>Loading...</h1>
            : <>
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
                          <div className="carousel-body">
                            <div className="blur">
                              <h1>{item.title}</h1>
                              <p>{item.desc}</p>
                            </div>
                            <img src={item.img} alt={`banner-${index}`} />
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
      </section>

      <section className="home-categories section">
        <ul className='flex-center'>
          {showCategories.map((category) => (
            <li key={category._id} >
              <NavLink to={`/category/${category.title}`} className='flex-center'>
                <h2>{category.title}</h2>
                <p>{category.desc}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      <section className='shop-with-us section'>
        <h2 className='title'>Why Shop <span>with us</span></h2>
        <ul className='flex-center'>
          <li>
            <TbTruckDelivery />
            <p>Fast delivery</p>
          </li>
          <li>
            <TbTruckDelivery />
            <p>Best quality</p>
          </li>
          <li>
            <TbTruckDelivery />
            <p>Free shipping</p>
          </li>
        </ul>
      </section>

      <section className="latest section">
        <h2 className='title latest-title'>Latest <span>products</span></h2>
        <PaginetedHome items={products} itemsPerPage={8} />
      </section>


      <section className='testimonial flex-center section'>
        <h2 className='title test'>Testimonials</h2>

        <div className="app__testimonial-item flex-center">
          <img src={test.img} alt="testimonial" />
          <div className="app__testimonial-content">
            <p className="p-text">{test?.feedback}</p>
            <div className="">
              <h4 className="bold-text">{test?.name}</h4>
              <h5 className="p-text">{test?.company}</h5>
            </div>
          </div>
        </div>

        <div className="app__testimonial-btns flex-center">
          <div className="flex-center" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>
          <div className="flex-center" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>
      </section>
    </>

  )
}

export default Home