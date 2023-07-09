import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../api/axios';

const REGISTER_URL = '/register';
const Register = () => {
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            email,
            pwd,
        }

        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify(newUser), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
            setEmail("");
            setPwd("");
            setErr("");
        } catch (err) {
            if (!err?.response) {
                setErr("No server response");
            } else if (err.response?.status === 409) {
                setErr("Email Taken");
            } else {
                setErr("Registration Failed");
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
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                />
                <p>{err}</p>
                <button type="submit">submit</button>
                <p><NavLink to='/sign-in'>Sign in</NavLink></p>
            </form>
        </div>
    )
}

export default Register