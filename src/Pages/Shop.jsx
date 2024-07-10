import { useState, useContext, useEffect } from 'react';
import './Shop.css';
import { ShopContext } from '../Context/ShopContext/ShopContext';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillFilter } from "react-icons/ai";
import { BiCategory, BiDollarCircle } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import Item from '../Components/Item/Item';
import Modal from '../Components/Modal/Modal';
import BackToTop from '../Components/BackToTop/BackToTop';
const Shop = (props) => {
    const { all_product } = useContext(ShopContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 30;
    const totalPages = Math.ceil(all_product.length / itemsPerPage);

    useEffect(() => {
        const storedCartCount = localStorage.getItem('cartCount');
        if (storedCartCount) {
            setCartCount(parseInt(storedCartCount));
        }

        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleProductClick = (productId) => {
        const product = all_product.find(p => p.id === productId);
        setSelectedProduct(product);
    };

    const handleAddToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        let updatedCartCount = cartCount + 1;
        setCartCount(updatedCartCount);
        localStorage.setItem('cartCount', updatedCartCount);

        console.log(`${product.name} added to cart.`);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = all_product.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="shop-category">
            <div className="header-banner">
                <div className="header-banner-content">
                    <h1 className='shop-banner-title'>Shop</h1>
                    <p>Explore our curated collection of exquisite furniture</p>
                </div>
            </div>
            <div className="shopcategory-indexsort">
                <BackToTop />
                <p>
                    <span>Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, all_product.length)}</span> out of {all_product.length} products
                </p>
                <div className="shopcategory-sort">
                    <div className="filter-category">
                        <BiCategory size={24} />
                        <label>Category:</label>
                        <select>
                            <option value="All">All</option>
                            <option value="Category1">Category1</option>
                            <option value="Category2">Category2</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>
                    <div className="filter-price">
                        <BiDollarCircle size={24} />
                        <label>Price:</label>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            defaultValue="1000"
                        />
                        <span>$1000</span>
                    </div>
                    <div className="filter-rating">
                        <FaStar size={24} />
                        <label>Rating:</label>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.5"
                            defaultValue="0"
                        />
                    </div>
                    <AiFillFilter size={24} />
                </div>
            </div>
            <div className="shopcategory-products">
                {selectedItems.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        category={item.category}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        onClick={handleProductClick}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    <AiOutlineArrowLeft /> Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next <AiOutlineArrowRight />
                </button>
            </div>
            {selectedProduct && (
                <Modal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                    onAddToCart={handleAddToCart}
                />
            )}
        </div>
    );
};

export default Shop;
