import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero"; // <-- Adjust path if needed
import Products from "./Component/products/Products";
import TopProducts from "./Component/TopProduct/TopProducts";

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
    </div>
  );
};

export default App;
