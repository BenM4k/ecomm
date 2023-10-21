import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { updateQuery } from '../../redux/slices/search/searchSlice';
import { selectAllProducts } from '../../redux/slices/products/productSlice';
import { selectAllCategories } from '../../redux/slices/category/category';
// import { urlFor } from '../../Client';
import './Store.scss';
import Pagineted from '../../components/Paginated/Pagineted';

const Store = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const { query } = useSelector((store) => store.search);
    const categories = useSelector(selectAllCategories);
    const storeCat = categories.slice(0, 5);

    const handleUpdateQuery = (e) => {
        dispatch(updateQuery(e.target.value))
    }

    return (
        <motion.main
            className='main-container'
        >
            <div className="store-header">
                <input type='text' placeholder='search' className='search' onChange={handleUpdateQuery} value={query} />
                <ul className='categories'>
                    <li>
                        <NavLink to='/category'>
                            All
                        </NavLink>
                    </li>
                    {storeCat?.map(category => (
                        <li key={category.title}>
                            <NavLink to={`/category/${category.title}`}>
                                {category.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <h1 className='title'>Our <span>Top Sales</span></h1>
            <div className="my-store">
                <Pagineted items={products} itemsPerPage={8} />
            </div>
        </motion.main>
    )
}

export default Store