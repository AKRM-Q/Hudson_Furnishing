// import React from 'react';
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLatter from '../Components/NewsLatter/NewsLatter';
import Categories from '../Components/Categories/Categories';
import BackToTop from '../Components/BackToTop/BackToTop';
const Home = () => {
  return (
    <div>
      <BackToTop />
      <Hero />
      <Categories />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLatter />
    </div>
  );
}

export default Home;
