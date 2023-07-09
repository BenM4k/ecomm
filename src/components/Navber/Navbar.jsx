import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav>
            <div><NavLink to='/'>Logo</NavLink></div>
            <ul>
                <li><NavLink to='/admin'>Admin</NavLink></li>
                <li><NavLink to='/store'>Store</NavLink></li>
                <li>
                    <NavLink to={`/profile/`}>Profile</NavLink>
                </li>
            </ul>
            <div className='navbar-cart'><NavLink to='cart'><AiOutlineShoppingCart /></NavLink></div>
            <ul>
                <li><NavLink to='/store'>Store</NavLink></li>
                <li><NavLink to='/sign-in'>Sign in</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar