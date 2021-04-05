import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    
    const [cart, setCart] = useState([]);
    
    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);

        const cartProducts =  productKey.map( key => {
            const product =  fakeData.find(pd => pd.key === key);
            product.quantity =  savedCart[key];

            return product;
        });
        setCart(cartProducts)
    },[])
    
    return (
        <div>
            <h1>Cart Item Review: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;