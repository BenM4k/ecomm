import { useState } from "react";
import { NavLink } from "react-router-dom";
import phone from '../../assets/pngimg.com - iphone_14_PNG24.png';
import './Paginated.scss';

const PaginetedHome = ({ items, itemsPerPage }) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="main-home-container">
            <ul className="product-list">
                {currentItems.map((item) => (
                    <li
                        key={item._id}
                        className='product-home'
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
                            <img src={phone} alt="product" className="product-image" loading="lazy"/>
                            <span
                                className='product-price'
                            >
                                ${item.price}
                            </span>
                        </NavLink>
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

export default PaginetedHome