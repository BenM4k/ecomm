import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cart/Cart';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Cart />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout