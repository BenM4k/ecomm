import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { addOrder } from '../../redux/slices/order/orderSlice'
import { clearCart } from '../../redux/slices/cart/cartSlice'
import Order from '../../models/orderModel';
// import useAuth from '../../hooks/useAuth';
import './Shipping.scss';

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
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [road, setRoad] = useState("");
    const [postCode, setPostCode] = useState("");
    const shippingDetails = [country, streetAddress, street, road, postCode]

    //cart Details 
    const [card, setCard] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardSecurity, setCardSecurity] = useState("");
    const [cardDate, setCardDate] = useState("");
    const paymentMethod = [card, cardName, cardNumber, cardSecurity, cardDate];

    //get total amount
    let total = 10;

    cart?.forEach((item) => {
        let amount = item?.price * item?.itemCount;
        total += amount;
        total.toFixed(2);
    })

    //set new Order
    const newOrder = new Order(
        uuid(), 'ben', cart, total, 'pending', time, shippingDetails, paymentMethod
    );

    const validateOrder = newOrder.validate();

    return (
        <div className='ship-container'>
            <div className="ship-header">
                <div className="ship-line">
                    <div className='ship-location active' />
                    <div className={'ship-location'} />
                    <div className={'ship-location'} />
                </div>
            </div>

            <div className="ship-body">
                <div className={"ship-address"} id='residence'>
                    <h2>Enter your shipping address</h2>
                    <select name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="" selected>Choose a country</option>
                        <option value="USA">USA</option>
                        <option value="CANADA">CANADA</option>
                        <option value="MEXICO">MEXICO</option>
                        <option value="BRAZIL">BRAZIL</option>
                        <option value="RU">RU</option>
                    </select>
                    <label>Street name</label>
                    <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                    <label>Street address</label>
                    <input type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
                    <label>Road</label>
                    <input type="text" value={road} onChange={(e) => setRoad(e.target.value)} />
                    <label htmlFor="">Post code</label>
                    <input type="text" value={postCode} onChange={(e) => setPostCode(e.target.value)} />

                    <div className="ship-btns">
                        <button
                            type="button"
                            className='back'
                        >
                            <NavLink to='/cart'>Back</NavLink>
                        </button>
                    </div>
                </div>

                <div className="pay-method" id='payment'>
                    <h2>Select your payment method</h2>
                    <div className="card">
                        <input type="checkbox" name="visa" id="" placeholder='visa' value={card} onChange={(e) => setCard(e.target.value)} /> visa

                    </div>
                    <div className="bic-card">
                        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                        <input type="text" value={cardSecurity} onChange={(e) => setCardSecurity(e.target.value)} />
                        <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                        <input type="text" value={cardDate} onChange={(e) => setCardDate(e.target.value)} />
                    </div>
                    <button
                        type="button"
                    >
                        <NavLink to='#residence' />
                    </button>
                    <button
                        type="button"

                    >
                        <NavLink to='#confirm'>Continue to payment</NavLink>
                    </button>
                </div>

                <div className="confirm" id='confirm'>
                    <div className="datas"></div>
                    <div className="items"></div>
                    <button
                        type="button"
                    >
                        <NavLink to='#payment' />
                    </button>
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

                <NavLink to='/admin'>admin</NavLink>
            </div>
        </div>
    )
}

export default Shipping