import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="section1">
        <p>jaedkjaendkjakd</p>
        <p>jaedkjaendkjakd</p>
        <p>jaedkjaendkjakd</p>
      </div>
      <div className="section2">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </div>
      <div className="section3">
        <p>bennymakomo@gmail.com</p>
        <p>2023 ecommerce</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer