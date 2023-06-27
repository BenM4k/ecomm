import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { urlFor } from '../../Client';

const Store = () => {
    const { products } = useSelector((store) => store.product);
    const liVariant = {
        start: { scale: 1 },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
            }
        },
    };
    const navVariant = {
        start: { opacity: 1 },
        hover: { opacity: 1 },
    }
    const childVariant = {
        start: { opacity: 0 },
        hover: {
            opacity: 1,
            transition: {
                duration: 0.8,
                type: 'tween',
            }
        },
    }
    const imgVariant = {
        start: { y: '30px' },
        hover: {
            y: '-10px',
            transition: {
                duration: 0.4,
                type: 'tween',
            }
        },
    }
    return (
        <motion.main
            className='main-container'
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
        >
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
                            variants={navVariant}
                            initial="start"
                            hover="hover"
                        >
                            {console.log()}
                            <motion.img
                                src={urlFor(product.imageurl).url()}
                                alt={product.title}
                                className='product-image'
                                variants={imgVariant}
                            />
                            <motion.h2
                                className='product-name'
                                variants={childVariant}
                            >
                                {product.title}
                            </motion.h2>
                            <motion.span
                                className='product-price'
                                variants={childVariant}
                            >
                                ${product.price}
                            </motion.span>
                        </NavLink>
                    </motion.li>
                ))}
            </ul>
        </motion.main>
    )
}

export default Store