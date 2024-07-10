import React from 'react';
import './Modal.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Modal = ({ product, onClose, onAddToCart }) => {
    if (!product || !product.image || !product.name || !product.new_price || !product.old_price) {
        console.error("Invalid product passed to Modal:", product);
        return null;
    }

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <div className="rating">
                {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} className="star" />)}
                {[...Array(halfStars)].map((_, i) => <FaStarHalfAlt key={`half-${i}`} className="star" />)}
                {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} className="star" />)}
            </div>
        );
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={product.image} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                {renderStars(product.rating || 4.5)}
                <p className='new-price'>New Price: ${product.new_price}</p>
                <p className='old-price'>Old Price: ${product.old_price}</p>
                <div className="images-container">
                    {[product.image, product.image, product.image].map((img, i) => (
                        <img key={i} src={img} alt={`extra-${i}`} className="extra-image" />
                    ))}
                </div>
                <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Modal;
