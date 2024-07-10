// GalleryPage.js
import React from 'react';
import data_product from '../Components/data/all_product';
import './Gallery.css';
import BackToTop from '../Components/BackToTop/BackToTop';

const GalleryPage = () => {
    return (
        <>
                <div className="header-banner">
            <div className="header-banner-content">
                <h1>gallery</h1>
                <p>Experience the beauty of Hudson Furnishing</p>
            </div>
        </div>
        <div className="gallery">
            <BackToTop />
            <h1>Product Gallery</h1>
            <div className="gallery-grid">
                {data_product.map(product => (
                    <div key={product.id} className="gallery-item">
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default GalleryPage;
