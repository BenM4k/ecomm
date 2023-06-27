import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { urlFor } from '../../Client';
import './Store.scss';

const Store = () => {
    const { products, categories } = useSelector((store) => store.product);
    const mainVariant = {
        start: { opacity: 0 },
        end: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.3,
            }
        }
    }
    const liVariant = {
        start: { scale: 1 },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
            }
        },
    };

    return (
        <motion.main
            className='main-container'
            variants={mainVariant}
            initial='start'
            animate='end'
        >
            <ul className='categories'>
                {categories?.map(category => (
                    <li key={category.title}>{category.title}</li>
                ))}
            </ul>
            <h1>Our <span>Top Sales</span></h1>
            <ul className='product-list'>
                {products.map(product => (
                    <motion.li
                        key={product._id}
                        className='product'
                        variants={liVariant}
                        initial="start"
                        whileHover="hover"
                    >
                        <NavLink
                            to={`/product/${product._id}`}
                            className="product-link"
                            initial="start"
                            hover="hover"
                        >
                            <motion.h2
                                className='product-name'
                            >
                                {product.title}
                            </motion.h2>
                            <motion.img
                                src={urlFor(product.imageurl).url()}
                                alt={product.title}
                                className='product-image'
                            />
                        </NavLink>
                        <div className="product-footer">
                            <button>Add to cart</button>
                            <motion.span
                                className='product-price'
                            >
                                ${product.price}
                            </motion.span>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.main>
    )
}

export default Store