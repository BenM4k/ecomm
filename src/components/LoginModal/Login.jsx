import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { toggleLogin, toggleSignup } from '../../redux/slices/products/productSlice';
import { addUser, loginUser, logoutUser } from '../../redux/slices/users/userSlice';
import './Login.scss';

const Login = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
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
  const { isLoggedIn } = useSelector((store) => store.user);

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
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="text">Last name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="text">username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className='submit-login'
                        onClick={(e) => {
                            e.preventDefault();
                            if (name !== '' && lastName !== '' && username !== '' && password !== '') {
                                const newUser = {
                                    name,
                                    lastName,
                                    username,
                                    password,
                                };
                                dispatch(addUser(newUser));
                                setName('');
                                setLastName('');
                                setUsername('');
                                setPassword('');
                                dispatch(toggleSignup());
                            }else {
                                setError('Fill all the cases')
                            }
                        }}
                    >
                        Submit
                    </button>
                    <span className='error'>{error}</span>
                    <div className="login-footer">
                        <button
                            className='forget'
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(toggleLogin());
                                dispatch(toggleSignup());
                                setError('');
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
                <form className='login-form' onSubmit={(e) => {
                    e.preventDefault();
                    if(username !== '' && password !== '') {
                        const user = {
                            username,
                            password,
                        }
                        dispatch(loginUser(user));
                        dispatch(logoutUser());
                        if (isLoggedIn) {
                            navigate(`/profile/${user.username}`);
                            setUsername('');
                            setPassword('');
                            dispatch(toggleLogin());
                        }
                    }
                }}>
                    <label htmlFor="text">username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="checkbox">remember me</label>
                    </div>
                    <button type="submit" className='submit-login'>Submit</button>
                    <div className="login-footer">
                        <button
                            className='forget'
                            onClick={(e) => e.preventDefault()}
                        >
                            forget password
                        </button>
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