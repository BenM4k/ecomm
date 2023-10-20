import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const displayVariant = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

const HomeTestimonials = () => {
    const testimonials = useSelector((store) => store.testimonial)
  const [currentIndex, setCurrentIndex] = useState( () => 0 );
    const test = testimonials[currentIndex];
  const handleClick = (index) => {
    setCurrentIndex(index);
  }
  return (
    <>
        <h2 className='title test'>Testimonials</h2>

        <motion.div className="app__testimonial-item flex-center"
        variants={displayVariant}
        initial='start'
        whileInView="end">
        <img src={test.img} alt="testimonial" loading='lazy' />
        <div className="app__testimonial-content">
            <p className="p-text">{test?.feedback}</p>
            <div className="">
            <h4 className="bold-text">{test?.name}</h4>
            <h5 className="p-text">{test?.company}</h5>
            </div>
        </div>
        </motion.div>

        <div className="app__testimonial-btns flex-center">
        <div className="flex-center" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
        </div>
        <div className="flex-center" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
        </div>
        </div>
    </>
  )
}

export default HomeTestimonials;