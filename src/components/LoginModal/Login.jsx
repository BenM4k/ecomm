import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { toggleLogin, toggleSignup } from '../../redux/slices/products/productSlice';
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
  const {login, signup } = useSelector((store) => store.product);

  return (
    <>
        {signup && <div className="login-wrapper">
            <motion.div 
                className="login-container"
                variants={modalVariant}
                initial="start"
                animate="end"
            >
                <button
                    onClick={() =>{
                        dispatch(toggleSignup());
                    } }
                    className='close-login'
                >
                    close
                </button>
                <h1>Sign in</h1>
                <form className='login-form'>
                    <label htmlFor="text">First Name</label>
                    <input type="text" />
                    <label htmlFor="text">Last name</label>
                    <input type="text" />
                    <label htmlFor="text">username</label>
                    <input type="text" />
                    <label htmlFor="password">password</label>
                    <input type="password" />
                    <button type="button" className='submit-login'>Submit</button>
                    <div className="login-footer">
                        <button
                            className='forget'
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(toggleLogin());
                                dispatch(toggleSignup());
                            } }
                        >
                            Or Log in
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>}
        { login && <div className="login-wrapper">
            <motion.div 
                className="login-container"
                variants={modalVariant}
                initial="start"
                animate="end"
            >
                <button
                    onClick={() =>{
                        dispatch(toggleLogin());
                    } }
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
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="checkbox">remember me</label>
                    </div>
                    <button type="button" className='submit-login'>Submit</button>
                    <div className="login-footer">
                        <button className='forget'>forget password</button>
                        <button
                            className='forget'
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(toggleSignup());
                                dispatch(toggleLogin());
                            } }
                        >
                            Or Sign in
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>}
    </>
  )
}

export default Login