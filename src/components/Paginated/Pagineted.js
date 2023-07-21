import { useState } from "react";
import { NavLink } from "react-router-dom";
import { addToCart } from '../../redux/slices/cart/cartSlice';
import { useDispatch } from "react-redux";
import phone from '../../assets/pngimg.com - iphone_14_PNG24.png';
import './Paginated.scss';

const Pagineted = ({ items, itemsPerPage }) => {
    const dispatch = useDispatch();
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="main-container">
            <ul className="product-list">
                {currentItems.map((item) => (
                    <li
                        key={item._id}
                        className='product'
                    >
                        <NavLink
                            to={`/product/${item._id}`}
                            className="product-link"
                            initial="start"
                            hover="hover"
                        >
                            <h2
                                className='product-name'
                            >
                                {item.title}
                            </h2>
                            <img src={phone} alt="product" className="product-image" />
                        </NavLink>
                        <div className="product-footer">
                            <button
                                onClick={() => {
                                    dispatch(addToCart(item))
                                }}
                            >
                                Add to cart
                            </button>
                            <span
                                className='product-price'
                            >
                                ${item.price}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="page-numbers">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button key={index} onClick={(e) => {
                        goToPage(index + 1)
                    }}>{index + 1}</button>
                ))}
            </div>
        </div>
    )
}

export default Pagineted