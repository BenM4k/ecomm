import React from 'react'

const Card = ({ setCard }) => {
  return (
    <>
        <div className="card">
            <label htmlFor="visa">Visa</label>
            <input type="checkbox" name="visa" id="" placeholder='visa' onChange={(e) => setCard((prev) => {
                return { ...prev, card: e.target.value }
            })} />
            <label htmlFor="mastercard">Mastercard</label>
            <input type="checkbox" name="mastercard" id="" placeholder='visa' onChange={(e) => setCard((prev) => {
                return { ...prev, card: e.target.value }
            })} />
            <label htmlFor="paypal">Paypal</label>
            <input type="checkbox" name="paypal" id="" placeholder='visa' onChange={(e) => setCard((prev) => {
                return { ...prev, card: e.target.value }
            })} />
            <label htmlFor="stripe">Stripe</label>
            <input type="checkbox" name="stripe" id="" placeholder='visa' onChange={(e) => setCard((prev) => {
                return { ...prev, card: e.target.value }
            })} />

        </div>
        <div className="bic-card">
            <input type="text" onChange={(e) => setCard((prev) => {
                return { ...prev, number: e.target.value }
            })} />
            <input type="text" onChange={(e) => setCard((prev) => {
                return { ...prev, security: e.target.value }
            })} />
            <input type="text" onChange={(e) => setCard((prev) => {
                return { ...prev, name: e.target.value }
            })} />
            <input type="text" onChange={(e) => setCard((prev) => {
                return { ...prev, date: e.target.value }
            })} />
        </div>
    </>
  )
}

export default Card;