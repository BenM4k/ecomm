import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineShopping } from 'react-icons/ai';
import { toggleLogin, toggleCart } from '../../redux/slices/products/productSlice';
import './Navbar.scss';

const Navbar = () => {
  const svgVariant = {
    start: { rotate: -180 },
    end: {
      rotate: 0,
      transition: {
        duration: 1,
      }
    }
  }
  const pathVariant = {
    start: {
      opacity: 0,
      pathLength: 0,
    },
    end: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      }
    }
  }
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.product.cart);
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to='/' className="logo-link">
            <motion.svg
              className="pizza-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              variants={svgVariant}
              initial="start"
              animate="end"
            >
              <motion.path
                variants={pathVariant}
                fill="none"
                d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
              />
              <motion.path
                variants={pathVariant}
                fill="none"
                d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
              />
            </motion.svg>
          </NavLink>
        </div>

        <ul>
          <li>
            <NavLink to='/profile' className="profile">Profile</NavLink></li>
          <li onClick={() => dispatch(toggleLogin())}>Log in</li>
          <li onClick={() => dispatch(toggleCart())}>
              <span className='cart-number'>{cart.length}</span>
            <AiOutlineShopping className='cart-logo' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar