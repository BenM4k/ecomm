import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { toggleLogin, toggleCart } from '../../redux/slices/products/productSlice';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.product.cart);
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to='/' className="logo-link">Nav</NavLink>
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