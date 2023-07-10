import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Shipping.scss';

const Shipping = () => {
    const [firstPage, setFirstPage] = useState(true);
    const [secondPage, setSecondPage] = useState(false);
    const [thirdPage, setThirdPage] = useState(false);
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
                    <select name="country" id="country">
                        <option value="USA">USA</option>
                        <option value="CANADA">CANADA</option>
                        <option value="MEXICO">MEXICO</option>
                        <option value="BRAZIL">BRAZIL</option>
                        <option value="RU">RU</option>
                    </select>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

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
                        <input type="checkbox" name="visa" id="" placeholder='visa' /> visa

                    </div>
                    <div className="bic-card"></div>
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