import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pagineted from '../../components/Paginated/Pagineted';

const Category = () => {
    const { products } = useSelector((store) => store.product);
    const { category } = useParams();
    const filteredProducts = products.filter(product => product.category === category);
    return (
        <>
            {filteredProducts.length === 0 ? <h2 style={{
                margin: "15rem 3rem",
                textAlign: "center"
            }}>No products for this category</h2> :
                <div style={{
                    margin: "10rem 0"
                }}>
                    <Pagineted items={filteredProducts} itemsPerPage={3} />
                </div>}
        </>
    )
}

export default Category