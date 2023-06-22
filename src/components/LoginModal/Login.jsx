import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { toggleLogin } from '../../redux/slices/products/productSlice';
import './Login.scss';

const Login = () => {
  const modalVariant = {
    start: {
        y: '-120vh'
    },
    end: {
        y: 0,
        transition : {
            duration: 0.8,
            ease: 'easeInOut',
        }
    }
  }
  const dispatch = useDispatch();
  const login = useSelector((store) => store.product.login);
  return (
    <>
        {login && <div className="login-wrapper">
            <motion.div 
                className="login-container"
                variants={modalVariant}
                initial="start"
                animate="end"
            >
                <button
                    onClick={() => dispatch(toggleLogin())}
                    className='close-login'
                >
                    close
                </button>
                <h1>Login</h1>
                <form className='login-form'>
                    <label htmlFor="text">username</label>
                    <input type="text" />
                    <label htmlFor="password">password</label>
                    <input type="password" />
                    <input type="checkbox" />
                    <button type="button">Submit</button>
                    <span>forget password</span>
                </form>
            </motion.div>
        </div>}
    </>
  )
}

export default Login