// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Faqs from "./Pages/Faqs";
import ComingSoon from "./Pages/ComingSoon";
import Sitemap from "./Pages/Sitemap";
import Gallery from "./Pages/Gallery"
// import ProductsPage from "./Components/ProductsPage";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop category="bedroom" />} />
          <Route path="/shop" element={<Shop category="dinin groom" />} />
          <Route path="/shop" element={<Shop category="out door" />} />
          {/* <Route path="/products/:category" component={ProductsPage} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path=":productId" element={<productId />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

{
  /*  */
}
export default App;
