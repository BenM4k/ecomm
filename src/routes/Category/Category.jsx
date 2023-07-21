import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pagineted from '../../components/Paginated/Pagineted';

const Category = () => {
    const { products } = useSelector((store) => store.product);
    const { category } = useParams();
    const filteredProducts = products.filter(product => product.category === category);
    return (
        <div>
            <Pagineted items={filteredProducts} itemsPerPage={3} />
        </div>
    )
}

export default Category