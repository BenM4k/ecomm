import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import useLogout from '../../hooks/useLogout';
import { logoutUser } from '../../redux/slices/users/userSlice';

const Navbar = () => {
    const { auth } = useAuth();
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
                <li><NavLink to='/store'>Store</NavLink></li>
                {auth?.roles?.includes(parseInt(process.env.REACT_APP_ADMIN_ROLE))
                    ? <>
                        <li><NavLink to='/admin'>Admin</NavLink></li>
                    </>
                    : <span />
                }
                {auth?.roles
                    ?
                    <>
                        <li>
                            <NavLink to={`/profile/${auth?.userInfo.username}`}>Profile</NavLink>
                        </li>
                        <li className='navbar-cart'><NavLink to='cart'><AiOutlineShoppingCart /></NavLink></li>
                        <button onClick={handleLogout}>Log Out</button>
                    </>
                    : <>
                        <li><NavLink to='/sign-in'>Sign in</NavLink></li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default Navbar