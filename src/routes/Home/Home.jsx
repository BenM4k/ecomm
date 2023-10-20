import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import './Home.scss';
import HomeBanner from './HomeBanner';
import HomeCategories from './HomeCategories';
import HomeService from './HomeService';
import HomeTestimonials from './HomeTestimonials';
import HomeLatestsProducts from './HomeLatestsProducts';

const Home = () => {
  const { error, loadingProducts } = useSelector((store) => store.product);
  
  return (
    <>
      <section className='hero-banner section'>
        {error ? <h2 className='failed'>{error}</h2>
          : loadingProducts ? <h1 className='load'>Loading...</h1>
            : <>
              <HomeBanner />
            </>
        }
      </section>

      <section className="home-categories section">
        <HomeCategories />
      </section>

      <section className='shop-with-us section'>
        <HomeService />
      </section>

      <motion.section
        className="latest section"
      >
        <HomeLatestsProducts />
      </motion.section>


      <section className='testimonial flex-center section'>
        <HomeTestimonials />
      </section>
    </>

  )
}

export default Home