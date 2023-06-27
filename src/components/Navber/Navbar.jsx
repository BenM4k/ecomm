import React from 'react';
import {
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'
const Navbar = () => {
    return (
        <nav>
            <div><NavLink to='/'>Logo</NavLink></div>
            <SignedIn>
                <ul>
                    <li><NavLink to='/admin'>Admin</NavLink></li>
                    <li><NavLink to='/store'>Store</NavLink></li>
                    <li>
                        <NavLink to='/profile'>Profile</NavLink>
                    </li>
                    <li><UserButton /></li>
                </ul>
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