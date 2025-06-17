import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Darkmode from "./Darkmode";
const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#service" },
  { id: 3, name: "Kids Wear", link: "/#" },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
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
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-blue-600 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-blue-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
