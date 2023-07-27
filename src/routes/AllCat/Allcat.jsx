import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Allcat.scss';

const Allcat = () => {
    const categories = useSelector((store) => store.category);

    return (
        <div className='all-cat'>
            <NavLink to="/store" className="back-to-store">Go to store</NavLink>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <NavLink to={`/category/${category.title}`} className='flex-center'>
                            <h2>{category.title}</h2>
                            <p>{category.desc}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Allcat