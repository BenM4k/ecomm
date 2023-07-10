import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';
import { useSelector, useDispatch } from 'react-redux';
import useLogout from '../../hooks/useLogout';
import { logoutUser } from '../../redux/slices/users/userSlice';

const Navbar = () => {
    const { auth } = useAuth();
    const { isLoggedIn } = useSelector((store) => store.user);
    const navigate = useNavigate();
    const logout = useLogout();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await logout();
        navigate('/');
        dispatch(logoutUser());
    }
    return (
        <nav>
            <div><NavLink to='/'>Logo</NavLink></div>
            <ul>
                {auth?.roles?.includes(998)
                    ? <>
                        <li><NavLink to='/admin'>Admin</NavLink></li>
                        <li><NavLink to='/store'>Store</NavLink></li>
                        <li>
                            <NavLink to={`/profile/${auth?.userInfo?.username}`}>Profile</NavLink>
                        </li>
                        <button onClick={handleLogout}>Log Out</button>
                        <div className='navbar-cart'><NavLink to='cart'><AiOutlineShoppingCart /></NavLink></div>
                    </>
                    : <li><NavLink ink to='/sign-in'>Sign in</NavLink></li>
                }
                {isLoggedIn
                    ?
                    <>
                        <li><NavLink to='/store'>Store</NavLink></li>
                        <li>
                            <NavLink to={`/profile/${auth?.userInfo?.username}`}>Profile</NavLink>
                        </li>
                        <button onClick={handleLogout}>Log Out</button>
                        <div className='navbar-cart'><NavLink to='cart'><AiOutlineShoppingCart /></NavLink></div>
                    </>
                    : <span />
                }
            </ul>
        </nav>
    )
}

export default Navbar