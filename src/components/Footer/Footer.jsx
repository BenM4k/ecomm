import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="us">
                <h3>About Us</h3>
                <p>Doloribus maxime fuga eos illo sociis, nibh fringilla vestibulum metus dis neque accusamus risus! Risus accusantium nisl cum! Nihil lobortis itaque penatibus molestias. Vivamus irure arcu ullamcorper risus quas dui.</p>
                <span>Copyright 2023 Benny Makomo</span>
            </div>

            <div className="partners">
                <h3>Partners</h3>
                <ul>
                    <li>Amazon</li>
                    <li>Meta</li>
                    <li>Google</li>
                </ul>
            </div>
            <div className="useful-links">
                <h3>Useful Links</h3>
                <ul>
                    <li><NavLink to="">Privacy policy</NavLink></li>
                    <li><NavLink to="">Shipping policy</NavLink></li>
                    <li><NavLink to="">Terms and conditions</NavLink></li>
                    <li><NavLink to="">FAQs</NavLink></li>
                </ul>
            </div>
            <div className="contact">
                <h3>Socials</h3>
                <ul className='socials'>
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Phone</li>
                </ul>
                <form action="">
                    <h3>Contact us</h3>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Full Name</label>
                    <input type="text" />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Send a message</button>
                </form>
            </div>
        </div>
    )
}

export default Footer