import { AiFillCloseCircle, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { itemCountPlus, itemCountMinus } from '../../redux/slices/cart/cartSlice';
import { removeToCart } from '../../redux/slices/cart/cartSlice';
import phone from '../../assets/pngimg.com - iphone_14_PNG24.png';
import { useDispatch } from 'react-redux';

const CartProduct = ({ product }) => {
    const dispatch = useDispatch();
  return (
    <>
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
            <img src={phone} alt={product.title} loading='lazy'/>
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
    </>
  )
}

export default CartProduct;