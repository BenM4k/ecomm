import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { toggleCart, addCount, removeCount } from '../../redux/slices/products/productSlice';
import './Cart.scss';

const Cart = () => {
  const { cartOpen } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.product.cart);
  let total = 0;
  if (cartOpen.length !== 0) {
      cart.forEach((item) => {
        total += item.price
      })
  }
  return (
    <>
        { cartOpen && <div className='cart-wrapper'>
          <div className="cart-container">
            <div className="cart-head">
              <p>cart</p>
              <button
                type="button"
                onClick={() => dispatch(toggleCart())}
              >
                close
              </button>
            </div>
            <div className="cart-body">
              {cart.map((item) => (
                <div className="cart-details" key={item.id}>
                  <h1>{item.name}</h1>
                  <p>{item.desc}</p>
                  <span>${item.price}</span>
                  <p className='quantity'>
                    <span onClick={() => dispatch(addCount(item))}>
                      <AiOutlinePlus />
                      </span>
                      {console.log(item.itemCount)}
                    <span className='quant'>{item.itemCount}</span>
                    <span onClick={() => dispatch(removeCount(item))}>
                      <AiOutlineMinus />
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <p>Total</p>
              <span>${total}</span>
              <button>Pay Now</button>
            </div>
          </div>
        </div>}
    </>
  )
}

export default Cart