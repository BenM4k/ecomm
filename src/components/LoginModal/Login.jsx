import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleLogin } from '../../redux/slices/products/productSlice';
import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((store) => store.product.login);
  return (
    <>
        {login && <div className="login-wrapper">
            <div className="login-container">
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
            </div>
        </div>}
    </>
  )
}

export default Login