import React, { useState } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

const LogIn = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "/api/users/login";
        const user = {
            email,
            password,
        }

        if (user) {
            try {
                const response = await axios.post(url, user);
                const accessToken = response?.data.accessToken;
                const roles = response?.data.roles;
                setAuth({ user, roles, accessToken });
                setEmail("");
                setPassword("");
                navigate(from, { replace: true });
            } catch (err) {
                if (!err.response) {
                    setError("No server response")
                } else if (err.response?.status === 400) {
                    setError("All fields are required")
                } else if (err.response?.status === 401) {
                    setError("Invalid username or password")
                }
                console.log(err)
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">submit</button>
                <p>{error}</p>
                <NavLink to='/sign-up'>Sign up</NavLink>
            </form>
        </div>
    )
}

export default LogIn