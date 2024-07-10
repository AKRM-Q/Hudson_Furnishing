import React from 'react';
import './Item.css';
import { FaCartArrowDown, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { HiMiniEye } from "react-icons/hi2";

const Item = ({ id, name, image, new_price, old_price, onClick, onAddToCart }) => {
    const addToCart = (event) => {
        event.stopPropagation(); // منع عرض تفاصيل المنتج
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const newItem = { id, name, image, new_price, old_price };
        cartItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        let cartCount = parseInt(localStorage.getItem('cartCount') || 0);
        cartCount += 1;
        localStorage.setItem('cartCount', cartCount);
        console.log(`${name} added to cart.`);
        window.dispatchEvent(new Event('storage'));
    };

    const viewDetails = () => {
        onClick(id);
    };

    return (
        <div className="popular-items" onClick={viewDetails}>
            <img src={image} alt={name} />
            <div className="popular-item-details">
                <p>{name}</p>
                <div className="popular-item-rating">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStarHalfAlt className="star" />
                </div>
                <div className="popular-item-prices">
                    <div className="popular-item-price-new">
                        ${new_price}
                    </div>
                    <div className="popular-item-price-old">
                        ${old_price}
                    </div>
                </div>
            </div>
            <div className="item-buttons">
                <button onClick={addToCart} className="icon-button">
                    <FaCartArrowDown /> Add to cart
                </button>
                <button className="icon-button" onClick={viewDetails}>
                    <HiMiniEye /> View details
                </button>
            </div>
        </div>
    );
}

export default Item;
