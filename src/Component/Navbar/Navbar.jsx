import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-gray-600 duration-200 relative z-40">
      {/* Upper NavBar */}
      <div className="bg-blue-100 py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
          >
            <img src={Logo} alt="logo" className="w-12 h-12 object-contain" />
            <span className="uppercase">NEP Cart</span>
          </a>

          {/* Search Bar */}
          <div className="group w-full sm:w-auto relative hidden sm:block ">
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:w-[200px] group-hover:sm:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <IoMdSearch className="text-gray-500 group-hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
        </div>
        {/* Order Product */}
        <button>
          <span>Order</span>
        </button>
      </div>

      {/* Lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
