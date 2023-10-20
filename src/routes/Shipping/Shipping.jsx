import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addOrder } from '../../redux/slices/order/orderSlice'
import { clearCart } from '../../redux/slices/cart/cartSlice'
import Order from '../../models/orderModel';
// import useAuth from '../../hooks/useAuth';
import './Shipping.scss';
import Address from './Address';
import Card from './Card';

const Shipping = () => {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart);
    // const { auth } = useAuth();

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const time = `${year}-${month}-${day} at ${hour}h-${minutes}m-${seconds}s`;

    //shipping address
    const [address, setAddress] = useState({
        country: "",
        street: "",
        strAddr: "",
        road: "",
        postcode: "",
    });
    // 
    //cart Details 
    const [card, setCard] = useState({
        card: "",
        name: "",
        number: "",
        security: "",
        date: "",
    });

    console.log(card)
    //get total amount
    let total = 10;

    cart?.forEach((item) => {
        let amount = item?.price * item?.itemCount;
        total += amount;
        total.toFixed(2);
    })

    //set new Order
    const newOrder = new Order(
       'ben', cart, total, 'pending', time, address, card
    );

    const validateOrder = newOrder.validate();

    return (
        <div className='ship-container'>

            <div className="ship-body">
                <Address setAddress={setAddress}/>

                <div className="pay-method" id='payment'>
                    <h2>Select your payment method</h2>
                    <Card setCard={setCard}/>
                    <button
                        type="button"
                        onClick={() => {
                            if (validateOrder.length > 0) {
                                console.log('Order validation errors');

                                validateOrder.forEach((order) => {
                                    console.log(`- ${order}`);
                                });
                            } else {
                                console.log('Valid order');
                                dispatch(addOrder(newOrder));
                                dispatch(clearCart());
                            }
                        }}
                    >
                        <NavLink to='#payed'>Confirm</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Shipping