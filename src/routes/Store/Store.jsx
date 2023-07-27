import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { urlFor } from '../../Client';
import './Store.scss';
import Pagineted from '../../components/Paginated/Pagineted';

const Store = () => {
    const { error, products } = useSelector((store) => store.product);
    const categories = useSelector((store) => store.category);
    const storecat = categories.slice(0, 5);

    return (
        <motion.main
            className='main-container'
        >
            <div className="store-header">
                <input type='text' placeholder='search' className='search' />
                <ul className='categories'>
                    <li>
                        <NavLink to='/category'>
                            All
                        </NavLink>
                    </li>
                    {storecat?.map(category => (
                        <li key={category.title}>
                            <NavLink to={`/category/${category.title}`}>
                                {category.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <h1 className='title'>Our <span>Top Sales</span></h1>
            {error ? <h2 className='failed'>{error}</h2>
                : <Pagineted items={products} itemsPerPage={8} />}
        </motion.main>
    )
}

export default Store