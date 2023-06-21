import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { toggleLogin } from '../../redux/slices/products/productSlice';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
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
          <li>
              <span className='cart-number'>0</span>
            <AiOutlineShopping className='cart-logo' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar