import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email,
            pwd,
        }

        console.log(newUser);
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
                <button type="submit">submit</button>
                <p><NavLink to='/sign-in'>Sign in</NavLink></p>
            </form>
        </div>
    )
}

export default Register