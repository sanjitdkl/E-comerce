import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero"; // <-- Adjust path if needed
import Products from "./Component/products/Products";
import TopProducts from "./Component/TopProduct/TopProducts";
import Banner from "./Component/Banner/Banner";
import Subscribe from "./Component/Suscription/Subscribe";
import Testimonials from "./Component/Testimonials/Testimonials";

const App = () => {
  const handleOrderPopup = () => {
    console.log("Order button clicked!");
  };

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
    </div>
  );
};

export default App;
