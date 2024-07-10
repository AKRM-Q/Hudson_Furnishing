import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { TbMenu2 } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import logo from '../images/logo/logo.png';

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const [visitorCount, setVisitorCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        // Retrieve the count from local storage on component mount
        const storedCount = localStorage.getItem('visitorCount');
        if (storedCount) {
            setVisitorCount(parseInt(storedCount));
        }

        // Increment the count and store it in local storage
        const newCount = parseInt(storedCount || 0) + 1;
        setVisitorCount(newCount);
        localStorage.setItem('visitorCount', newCount);

        // Retrieve the cart count and items from local storage
        const storedCartCount = localStorage.getItem('cartCount');
        if (storedCartCount) {
            setCartCount(parseInt(storedCartCount));
        }

        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        const handleStorageChange = () => {
            const updatedCartCount = parseInt(localStorage.getItem('cartCount') || 0);
            setCartCount(updatedCartCount);

            const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartItems(updatedCartItems);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const removeFromCart = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        let updatedCartCount = parseInt(localStorage.getItem('cartCount') || 0);
        updatedCartCount -= 1;
        setCartCount(updatedCartCount);
        localStorage.setItem('cartCount', updatedCartCount);

        window.dispatchEvent(new Event('storage'));
    };

    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <Link to='/'>
                    <img className='logo' src={logo} alt="" />
                </Link>
                <span className='visitor-count'>Visitors: {visitorCount}</span>
            </div>
            <ul className={Mobile ? 'mobile-nav-links' : 'nav-links'} onClick={() => setMobile(false)}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/shop'><li>Shop</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <li className='cart-icon' onClick={toggleCart}>
                    <FaCartShopping />
                    {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                </li>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <IoMdCloseCircleOutline /> : <TbMenu2 />}
            </button>
            {showCart && (
                <div className="cart-modal">
                    <h2>Your Cart</h2>
                    {cartItems.length > 0 ? (
                        <div className="cart-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="cart-item-details">
                                        <p>{item.name}</p>
                                        <p>${item.new_price}</p>
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <button onClick={toggleCart}>Close</button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
