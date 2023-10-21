import { motion } from 'framer-motion';

import './Home.scss';
import HomeBanner from './HomeBanner';
import HomeCategories from './HomeCategories';
import HomeService from './HomeService';
import HomeTestimonials from './HomeTestimonials';
import HomeLatestsProducts from './HomeLatestsProducts';

const Home = () => {
  return (
    <>
      <section className='hero-banner section'>
        <HomeBanner />
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