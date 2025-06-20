import React from "react";
import Logo from "../../assets/Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const bannerURL =
  "https://images.unsplash.com/photo-1520975911098-5f2da0e3f9f8?auto=format&fit=crop&w=1470&q=80"; // Replace with your banner image

const logoURL = { Logo }; // Replace with your logo

const BannerImg = {
  backgroundImage: `url(${bannerURL})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#0d1b2a", // dark blue fallback color
  color: "white",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container mx-auto px-4">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3 pb-20 pt-10 gap-8"
        >
          {/* company details */}
          <div className="py-6 px-4">
            <h1 className="sm:text-3xl text-xl font-bold flex items-center gap-3 mb-4">
              <img src={logoURL} alt="Logo" className="w-[50px]" />
              Nep Cart
            </h1>
            <p className="text-gray-300">
              Welcome to Nep Cart! Explore a world of exciting products and
              offers with us.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 gap-6 md:pl-10">
            <div>
              <h1 className="sm:text-xl text-lg font-bold mb-4 text-blue-300">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-blue-400 hover:translate-x-1 transition duration-300 text-gray-300"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="sm:text-xl text-lg font-bold mb-4 text-blue-300">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-blue-400 hover:translate-x-1 transition duration-300 text-gray-300"
                    key={link.title + "-quick"}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="py-6 px-4">
            <h1 className="sm:text-xl text-lg font-bold mb-4 text-blue-300">
              Connect with us
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="hover:text-blue-400 transition">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Pokherea , Nepal</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+977 98400000000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 py-4 border-t border-gray-600">
          © {new Date().getFullYear()} Nep Cart. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
