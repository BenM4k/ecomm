import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';
import { FaUser } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import useLogout from '../../hooks/useLogout';
// import { logoutUser } from '../../redux/slices/users/userSlice';

const Navbar = () => {
    const { auth } = useAuth();
    // const navigate = useNavigate();
    // const logout = useLogout();
    // const dispatch = useDispatch();

    // const handleLogout = async () => {
    //     await logout();
    //     navigate('/');
    //     dispatch(logoutUser());
    // }
    return (
        <nav>
            <div><NavLink to='/'>Logo</NavLink></div>
            <ul>
                <li className={auth.user.email === '' ? 'landing-store' : ''}><NavLink to='/store'>Store</NavLink></li>
                {auth.roles.includes(parseInt(process.env.REACT_APP_ADMIN_ROLE)) && <li><NavLink to='/admin'>Dashboard</NavLink></li>}
                {auth.roles.includes(parseInt(process.env.REACT_APP_USER_ROLE)) &&
                    <>
                        <li><NavLink to={`/profile/${auth.userInfo.firstname}`}>Profile</NavLink></li>
                        <li className='navbar-btn navbar-cart'><NavLink to='cart'><AiOutlineShoppingCart /></NavLink></li>
                    </>
                }
                {auth.user.email === '' ? <li><NavLink to='/sign-in'>Sign in</NavLink></li> : <li className='navbar-btn nav-user'><FaUser /></li>}
            </ul>
        </nav>
    )
}

export default Navbar