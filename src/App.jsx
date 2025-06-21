import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // also import the CSS styles

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Products from "./Component/products/Products";
import TopProducts from "./Component/TopProduct/TopProducts";
import Banner from "./Component/Banner/Banner";
import Subscribe from "./Component/Suscription/Subscribe";
import Testimonials from "./Component/Testimonials/Testimonials";
import Footer from "./Component/Footer/Footer";
import Popup from "./Component/PopUp/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};
export default App;
