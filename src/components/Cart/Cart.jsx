import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion } from 'framer-motion';

import ear from '../../assets/headphones_b_2.webp';
import { toggleCart, addCount, removeCount } from '../../redux/slices/products/productSlice';
import './Cart.scss';

const Cart = () => {
  const cartVariant = {
    start: { x: '150vw' },
    end: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      }
    }
  }
  const { cartOpen } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const {cart} = useSelector((store) => store.product);
  let total = 0;
  let totalItems = 1;
  if (cart.length !== 0) {
      cart.forEach((item) => {
        totalItems = item.price * item.itemCount
        total += totalItems;
      })
  }
  return (
    <>
        { cartOpen && <div className='cart-wrapper'>
          <motion.div
            className="cart-container"
            variants={cartVariant}
            initial="start"
            animate="end"
          >
            <div className="cart-head">
              <h2 className='cart-title'>Your cart ({cart.length} item(s))</h2>
              <button
                type="button"
                onClick={() => dispatch(toggleCart())}
              >
                close
              </button>
              <div className="first-cart-side">
                <h3>Item</h3>
                <h3>price</h3>
                <h3>quantity</h3>
              </div>
            </div>

            <div className="cart-body">
              {cart.map((item) => (
                <div className="cart-details" key={item.id}>
                  <div className="second-cart-side">
                      <img src={ear} alt={item.name} />
                      <p>{item.name}</p>
                  </div>
                  <span className='cart-details-price'>${item.price}.00</span>
                  <div className='quantity'>
                    <span
                      onClick={() => dispatch(addCount(item))}
                      className='count-plus'
                    >
                      <AiOutlinePlus />
                      </span>
                    <span className='quant'>{item.itemCount}</span>
                    <span
                      onClick={() => dispatch(removeCount(item))}
                      className='count-minus'
                    >
                      <AiOutlineMinus />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-footer-price">
                <p>Total</p>
                <span>${total}.00</span>
              </div>
              <button>Pay Now</button>
            </div>
          </motion.div>
        </div>}
    </>
  )
}

export default Cart