import { useEffect, useRef, useState } from 'react';

import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/slices/authSlice/authSlice';
import { useLoginMutation } from '../../redux/slices/authSlice/authApiSlice';

const LogIn = () => {
    const [
        login,
        { isLoading}
    ] = useLoginMutation();
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [pwd, setPwd] = useState(() => "");
    const [email, setEmail] = useState(() => "");
    const [error, setError] = useState(() => "");

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setError('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email,
            pwd,
        }

        try {
            const userData = await login(user).unwrap();
            dispatch(setCredentials({ ...userData, user }));
            setEmail("");
            setPwd("");
            navigate(from, { replace: true });
        }catch(err){
            if (!err.response) {
                setError("No server response")
            } else if (err.response?.status === 400) {
                setError("All fields are required")
            } else if (err.response?.status === 401) {
                setError("Unauthorized")
            } else {
                setError("Login failed")
            }
        }
    }

    const content =  isLoading ?
        <h1>Loading...</h1> :
        (
        <div className='register-container'>
            <div className="register-img-placeholder flex-center">
                <h1>Image placeholder</h1>
            </div>
            <div className="register-form">
                <p
                    ref={errRef}
                    className={error ? "errmsg" : "offscreen"}
                    aria-live='assertive'
                >
                    {error}
                </p>

                <h1 className='title'>Sign In</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        id='email'
                        ref={userRef}
                        autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id='password'
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                    <button type="submit">Log in</button>

                    <p>
                        Need an account ? <br />
                        <div className="line">
                            <NavLink to='/sign-up'>Sign up</NavLink>
                        </div>
                    </p>
                </form>
            </div>
            </div>
        );
    return content;
}

export default LogIn