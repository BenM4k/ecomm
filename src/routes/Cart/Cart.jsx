import './Cart.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { urlFor } from '../../Client';

const Cart = () => {
    const { cart } = useSelector((store) => store.product)
    return (
        <div className='cart-container'>
            <ul className='cart-list'>
                {cart.map((product) => (
                    <li key={product._id}>
                        <img src={urlFor(product.imageurl).url()} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>

            <p>Total: <span>$1000.00</span></p>
            <button type="button">
                {cart.length
                    ? <NavLink to='/shipping'>Buy now</NavLink>
                    : < span />}

            </button>
        </div>
    )
}

export default Cart