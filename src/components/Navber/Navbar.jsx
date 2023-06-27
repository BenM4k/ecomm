import React from 'react';
import {
    SignedIn,
    SignedOut,
    UserButton,
    useUser
} from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const { user } = useUser();
    return (
        <nav>
            <div><NavLink to='/'>Logo</NavLink></div>
            <SignedIn>
                <ul>
                    <li><NavLink to='/admin'>Admin</NavLink></li>
                    <li><NavLink to='/store'>Store</NavLink></li>
                    <li>
                        <NavLink to={`/profile/${user?.firstName}`}>Profile</NavLink>
                    </li>
                </ul>
                <div><UserButton /></div>
            </SignedIn>
            <SignedOut>
                <ul>
                    <li><NavLink to='/store'>Store</NavLink></li>
                    <li><NavLink to='/sign-in'>Sign in</NavLink></li>
                </ul>
            </SignedOut>
        </nav>
    )
}

export default Navbar