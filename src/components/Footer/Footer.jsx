import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="section2">
        <div className="footer-icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </div>
        <div className="section3">
          <p>bennymakomo@gmail.com</p>
          <p>2023 ecommerce</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer