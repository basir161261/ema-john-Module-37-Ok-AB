import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props.product)
    const {name, quantity} = props.product;
    return (
        <div  className="review-item" >
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-btn"> Remove</button>
        </div>
    );
};

export default ReviewItem;