import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../redux/slices/category/category'
import { NavLink } from 'react-router-dom';

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

const HomeCategories = () => {
    const categories = useSelector(selectAllCategories);
    const showCategories = categories?.slice(1, 5);
  return (
    <motion.ul
        variants={parentVariant}
        initial="start"
        whileInView="end"
        className='flex-center'
    >
        {showCategories?.map((category) => (
        <motion.li key={category.id} variants={childVariant}>
            <NavLink to={`/category/${category.title}`} className='flex-center'>
            <h2>{category.title}</h2>
            <p>{category.desc}</p>
            </NavLink>
        </motion.li>
        ))}
    </motion.ul>
  )
}

export default HomeCategories;