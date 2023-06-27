import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navber/Navbar';

const Layout = () => {
    return (
        <header>
            <Navbar />
            <Outlet />
        </header>
    )
}

export default Layout