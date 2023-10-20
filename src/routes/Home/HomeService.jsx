import { motion } from 'framer-motion';
import { TbTruckDelivery } from 'react-icons/tb';

const parentVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        type: 'spring',
        staggerChildren: 0.2,
      }
    }
  }
  
  const childVariant = {
    start: {
      opacity: 0,
      x: '-20px'
    },
    end: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeIn',
        type: 'spring',
        stiffness: 60,
      }
    }
  }

const HomeService = () => {
  return (
    <>
        <h2 className='title'>Why Shop <span>with us</span></h2>
        <motion.ul
          className='flex-center'
          variants={parentVariant}
          initial="start"
          whileInView="end"
        >
          <motion.li variants={childVariant}>
            <TbTruckDelivery />
            <p>Fast delivery</p>
          </motion.li>
          <motion.li variants={childVariant}>
            <TbTruckDelivery />
            <p>Best quality</p>
          </motion.li>
          <motion.li variants={childVariant}>
            <TbTruckDelivery />
            <p>Free shipping</p>
          </motion.li>
        </motion.ul>
    </>
  )
}

export default HomeService;