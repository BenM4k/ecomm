import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { addOrder } from '../../redux/slices/order/orderSlice'
import Order from '../../models/orderModel';
import useAuth from '../../hooks/useAuth';
import useChange from '../../hooks/useChange';
// import './Shipping.scss';

const Shipping = () => {
    const change = useChange();
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart);
    const { auth } = useAuth();

    //page control
    const [firstPage, setFirstPage] = useState(true);
    const [secondPage, setSecondPage] = useState(false);
    const [thirdPage, setThirdPage] = useState(false);

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
    let total = 0;

    cart?.forEach((item) => {
        let amount = item?.price * item?.itemCount;
        total += amount;
    })

    //set new Order
    const newOrder = new Order(
        uuid, auth?.userId, cart, total, 'pending', Date.now(), shippingDetails, paymentMethod
    );

    return (
        <div className='ship-container'>
            <div className="ship-header">
                <div className="ship-line">
                    <div className='ship-location active' />
                    <div className={!secondPage ? 'ship-location' : 'ship-location active'} />
                    <div className={!thirdPage ? 'ship-location' : 'ship-location active'} />
                </div>
            </div>

            <div className="ship-body">
                <div className={firstPage ? "ship-address" : "ship-address hidden"} id='residence'>
                    <h2>Enter your shipping address</h2>
                    <select name="country" id="country" value={country} onChange={(e) => change(e, setCountry)}>
                        <option value="USA">USA</option>
                        <option value="CANADA">CANADA</option>
                        <option value="MEXICO">MEXICO</option>
                        <option value="BRAZIL">BRAZIL</option>
                        <option value="RU">RU</option>
                    </select>
                    <input type="text" value={street} onChange={(e) => change(e, setStreet)} />
                    <input type="text" value={streetAddress} onChange={(e) => change(e, setStreetAddress)} />
                    <input type="text" value={road} onChange={(e) => change(e, setRoad)} />
                    <input type="text" value={postCode} onChange={(e) => change(e, setPostCode)} />

                    <div className="ship-btns">
                        <button
                            type="button"
                            className='back'
                        >
                            <NavLink to='/cart'>Back</NavLink>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setSecondPage(true);
                                setFirstPage(false);
                            }}
                        >
                            <NavLink to='#payment'>Continue to payment</NavLink>
                        </button>
                    </div>
                </div>

                <div className="pay-method" id='payment'>
                    <h2>Select your payment method</h2>
                    <div className="card">
                        <input type="checkbox" name="visa" id="" placeholder='visa' value={card} onChange={(e) => change(e, setCard)} /> visa

                    </div>
                    <div className="bic-card">
                        <input type="text" value={cardNumber} onChange={(e) => change(e, setCardNumber)} />
                        <input type="text" value={cardSecurity} onChange={(e) => change(e, setCardSecurity)} />
                        <input type="text" value={cardName} onChange={(e) => change(e, setCardName)} />
                        <input type="text" value={cardDate} onChange={(e) => change(e, setCardDate)} />
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            setFirstPage(true)
                        }}
                    >
                        <NavLink to='#residence' />
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setThirdPage(true);
                        }}
                    >
                        <NavLink to='#confirm'>Continue to payment</NavLink>
                    </button>
                </div>

                <div className="confirm" id='confirm'>
                    <div className="datas"></div>
                    <div className="items"></div>
                    <button
                        type="button"
                        onClick={() => {
                            setSecondPage(true);
                        }}
                    >
                        <NavLink to='#payment' />
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setThirdPage(false);
                            dispatch(addOrder(newOrder))
                        }}
                    >
                        <NavLink to='#payed'>Confirm</NavLink>
                    </button>
                </div>

                <div className="payed" id="payed">
                    <div className="confirm-button"></div>
                </div>
            </div>
        </div>
    )
}

export default Shipping