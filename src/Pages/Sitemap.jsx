import './Sitemap.css';
import sitemap from '../images/sitemap.webp';
import BackToTop from '../Components/BackToTop/BackToTop';

function Sitemap() {
  return (
    <div className="sitemap-page">
      <BackToTop />
            <div className="header-banner">
                <div className="header-banner-content">
                    <h1>Site Map</h1>
                    <p>A site map for a furniture website</p>
                </div>
            </div>
      <div className="sitemap-container">
        <h1 className="sitemap-header">Site Map</h1>

        <ul className="sitemap-list">
          <li className="sitemap-item">
            <a href="/">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="Home" className="sitemap-background" />
                <span className="sitemap-text">Home</span>
              </div>
            </a>
          </li>
          <li className="sitemap-item">
            <a href="/shop">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="Shop" className="sitemap-background" />
                <span className="sitemap-text">Shop</span>
              </div>
            </a>
          </li>
          <li className="sitemap-item">
            <a href="/about">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="About" className="sitemap-background" />
                <span className="sitemap-text">About</span>
              </div>
            </a>
          </li>
          <li className="sitemap-item">
            <a href="/contact">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="Contact" className="sitemap-background" />
                <span className="sitemap-text">Contact</span>
              </div>
            </a>
          </li>
          <li className="sitemap-item">
            <a href="/faqs">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="FAQs" className="sitemap-background" />
                <span className="sitemap-text">FAQs</span>
              </div>
            </a>
          </li>
          <li className="sitemap-item">
            <a href="/sitemap">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="Site Map" className="sitemap-background" />
                <span className="sitemap-text">Site Map</span>
              </div>
            </a>
          </li>
          <li className="sitemap-item">
            <a href="/gallery">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="Gallery" className="sitemap-background" />
                <span className="sitemap-text">Gallery</span>
              </div>
            </a>
          </li>
          <li className="sitemap-item">
            <a href="/comingsoon">
              <div className="sitemap-item-content">
                <img src={sitemap} alt="Coming Soon" className="sitemap-background" />
                <span className="sitemap-text">Coming</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sitemap;
