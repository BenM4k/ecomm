import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { client } from '../../Client';
import useAuth from '../../hooks/useAuth';

import './Login.scss';
import { loginUser } from '../../redux/slices/users/userSlice';

const Login = () => {
    const { setAuth } = useAuth();

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || '/profile';

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const query = `*[_type == 'myusers' && username == $username && password == $password]{roles, token}`;
            const params = { username: user, password: pwd }
            const response = await client.fetch(query, params);
            const from = location.state?.from?.pathname || `/profile/${user}` || '/';

            if (response.length > 0) {
                const { roles, token } = response[0];
                console.log(roles);
                setAuth({ user, pwd, roles, token });
                dispatch(loginUser());
                setUser('');
                setPwd('');
                navigate(from, { replace: true });
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className='login-wrapper'>
            <div className="login-container">
                <p
                    ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        username:
                    </label>
                    <input
                        type="text"
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />

                    <label htmlFor="password">
                        password:
                    </label>
                    <input
                        type="password"
                        id='password'
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />

                    <button>Sign in</button>
                </form>
                <p>
                    Need an account? <br />
                    <span className='line'>
                        <NavLink to="/signup" className='line-a'>Sign up here</NavLink>
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Login