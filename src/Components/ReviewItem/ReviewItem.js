import React from 'react';
import './ReviewItem.css';
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="item-view" />
            </div>
            <div className='review-details-container'>
                <div className="review-details">
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                </div>
                <div className='delete-container'>
                    <button className='btn-delete' onClick={() => handleRemoveItem(product.id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;