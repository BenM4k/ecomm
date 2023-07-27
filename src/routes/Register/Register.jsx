import React, { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import axios from '../../api/axios';
import User from '../../models/userModel';
import image from '../../assets/106-1065068_samsung-note-10-plus-png-transparent-png-removebg-preview.png';
import './Register.scss';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-@.]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [err, setErr] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErr('');
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(email);
        const v2 = USER_REGEX.test(pwd);

        if (!v1 || !v2) {
            setErr("Invalid Entry");
        }

        try {
            const newUser = new User(username, email, pwd, firstname, lastname);
            const userErrors = newUser.validate();
            if (userErrors.length > 0) {
                userErrors.forEach(err => {
                    setErr(`${err}`);
                })
            }
            const response = await axios.post(REGISTER_URL, JSON.stringify(newUser), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response.data);
            // console.log(response.accessToken); 
            // console.log(JSON.stringify(response));
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
            errRef.current.focus();
        }
    }

    return (
        <div className="register-container">
            <div className='register-img-placeholder'>
                <img src={image} alt="register" />
            </div>

            <div className='register-form'>
                <p
                    ref={errRef}
                    className={err ? "errmsg" : "offscreen"}
                    aria-live='assertive'
                >
                    {err}
                </p>

                <h1 className='title'>Register</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">username:</label>
                    <input
                        type="username"
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="email">email:</label>
                    <input
                        type="email"
                        id='email'
                        ref={userRef}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby='uidnote'
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />

                    <p
                        id='uidnote'
                        className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters. <br />
                        Must begin with a letter. <br />
                        Letters, numbers, underscores, hyphens allowed
                    </p>

                    <label htmlFor="firstname">First name:</label>
                    <input
                        type="firstname"
                        id='firstname'
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="lastname">Last name:</label>
                    <input
                        type="lastname"
                        id='lastname'
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="password">
                        password:
                        <span className={validPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="password"
                        id='password'
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby='pwdnote'
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p
                        id='pwdnote'
                        className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 28 characters. <br />
                        Must include uppercase and lowercase letters, a number and a special character <br />
                        Allowed special characters <span aria-label='exclamation mark'>!</span>
                        <span aria-label='at symbol'>@</span>
                        <span aria-label='hashtag'>#</span><span aria-label='dollar sign'>$</span><span aria-label='percent'>%</span>
                    </p>

                    <label htmlFor="confirm_pwd">
                        Confirm password:
                        <span className={validMatch && matchPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="password"
                        id='confirm_pwd'
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby='confirmnote'
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p
                        id='confirmnote'
                        className={matchFocus && !validMatch ? "instructions" : "offscreen"}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must Match the first password input field.
                    </p>

                    <button
                        type='submit'
                        disabled={!validEmail || !validPwd || !validMatch ? true : false}
                    >Sign up</button>

                    <p>
                        Already registered ? <br />
                        <div className="line">
                            <NavLink to='/sign-in'>Sign in</NavLink>
                        </div>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Register