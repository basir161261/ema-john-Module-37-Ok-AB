import React from 'react';
import { useParams } from 'react-router';
import Product from '../components/Product/Product';
import fakeData from '../fakeData';

const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey );
    // console.log(product)
    return (
        <div>
            <h1> Your product Detail</h1>
            <Product showAddToCArt={false} product={Product}></Product>
        </div>
    );
};

export default ProductDetail;