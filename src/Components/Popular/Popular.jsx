import { useState } from 'react';
import './Popular.css';
import data_product from '../data/data';
import Item from '../Item/Item';
import Modal from '../Modal/Modal';

const Popular = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleItemClick = (id) => {
        const product = data_product.find(item => item.id === id);
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const newItem = { id: product.id, name: product.name, image: product.image, new_price: product.new_price, old_price: product.old_price };
        cartItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        let cartCount = parseInt(localStorage.getItem('cartCount') || 0);
        cartCount += 1;
        localStorage.setItem('cartCount', cartCount);
        window.dispatchEvent(new Event('storage'));
        console.log(`${product.name} added to cart.`);
    };

    return (
        <div className='popular'>
            <h1>Popular Furniture</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        onClick={handleItemClick}
                    />
                ))}
            </div>
            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} onAddToCart={handleAddToCart} />
            )}
        </div>
    );
}

export default Popular;
