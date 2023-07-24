import './Cart.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { urlFor } from '../../Client';
import { AiFillCloseCircle, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { itemCountPlus, itemCountMinus } from '../../redux/slices/cart/cartSlice';
import { removeToCart } from '../../redux/slices/cart/cartSlice';
import phone from '../../assets/pngimg.com - iphone_14_PNG24.png';

const Cart = () => {
    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    let total = 0;

    cart?.forEach((item) => {
        let amount = item?.price * item?.itemCount;
        total += amount;
    })

    return (
        <div className='cart-container'>
            {cart.length ?
                <ul className='cart-list'>
                    {cart?.map((product) => (
                        <li key={product._id}>
                            <button
                                type='button'
                                className='delete-cart-item'
                                onClick={() => {
                                    dispatch(removeToCart(product));
                                }}
                            >
                                <AiFillCloseCircle />
                            </button>
                            <img src={phone} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <div className="item-count">
                                <button
                                    type="button"
                                    onClick={() => {
                                        product.itemCount === 1 ?
                                            dispatch(removeToCart(product))
                                            : dispatch(itemCountMinus(product))
                                    }}
                                >
                                    <AiOutlineMinus />
                                </button>
                                <span>{product.itemCount}</span>
                                <button
                                    type="button"
                                    onClick={() => dispatch(itemCountPlus(product))}
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul> : <h2>Your cart is empty</h2>}

            <p className='total'>Total: <span>${total.toFixed(2)}</span></p>
            <button type="button" className='buy-now'>
                {cart?.length
                    ? <NavLink to='/shipping'>Buy now</NavLink>
                    : < span />}

            </button>
        </div>
    )
}

export default Cart