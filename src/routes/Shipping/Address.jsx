import { NavLink } from 'react-router-dom';

const Address = ({ setAddress }) => {
    return (
    <>
        <div className={"ship-address"} id='residence'>
            <h2>Enter your shipping address</h2>
            <select name="country" id="country" onChange={(e) => setAddress((prev) => {
                return {prev, country: e.target.value}; 
            })}>
                <option value="" selected>Choose a country</option>
                <option value="USA">USA</option>
                <option value="CANADA">CANADA</option>
                <option value="MEXICO">MEXICO</option>
                <option value="BRAZIL">BRAZIL</option>
                <option value="RU">RU</option>
            </select>
            <label>Street name</label>
            <input type="text" onChange={(e) => setAddress((prev) => {
                return { ...prev, street: e.target.value};
            })} />
            <label>Street address</label>
            <input type="text" onChange={(e) => setAddress((prev) => {
                return { ...prev, strAddr: e.target.value};
            })} />
            <label>Road</label>
            <input type="text" onChange={(e) => setAddress((prev) => {
                return { ...prev, road: e.target.value}
            })} />
            <label htmlFor="">Post code</label>
            <input type="text" onChange={(e) => setAddress((prev) => {
                return { ...prev, postcode: e.target.value}
            })} />

            <div className="ship-btns">
                <button
                    type="button"
                    className='back'
                >
                    <NavLink to='/cart'>Back</NavLink>
                </button>
            </div>
        </div>
    </>
  )
}

export default Address;