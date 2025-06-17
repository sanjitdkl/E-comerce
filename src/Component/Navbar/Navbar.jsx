import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
const Navbar = () => {
  return (
    <div>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* Upper NavBar */}
        <div className="bg-blue-100 dark:bg-blue-950 py-2">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
            >
              <img src={Logo} alt="logo" className="w-12 h-12 object-contain" />
              <span className="uppercase">NEP Cart</span>
            </a>

            {/* Right Side: Search + Cart */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="group relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <IoMdSearch
                  className="text-gray-500 group-hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-3"
                  aria-label="Search icon"
                />
              </div>

              {/* Order Button */}
              <button
                type="button"
                onClick={() => alert("Ordering not available yet")}
                className="bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping
                  className="text-xl text-white drop-shadow-sm cursor-pointer"
                  aria-label="Cart icon"
                />
              </button>
              {/* Darkmode switch */}
              <div>
                <Darkmode />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
