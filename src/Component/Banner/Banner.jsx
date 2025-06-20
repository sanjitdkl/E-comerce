import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-blue-50 dark:bg-blue-900 transition-colors duration-300">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="max-w-[400px] h-[350px] w-full mx-auto rounded-xl object-cover drop-shadow-2xl"
            />
          </div>

          {/* text section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 text-blue-900 dark:text-blue-100">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-5xl font-bold leading-tight"
            >
              Winter Sale is Here!
              <br />
              <span className="text-blue-700 dark:text-blue-300">
                Get up to 50% Off
              </span>
            </h1>

            <p
              data-aos="fade-up"
              className="text-base text-blue-800 dark:text-blue-200 tracking-wide leading-relaxed"
            >
              Embrace the season with our exclusive winter collection. Shop
              top-quality fashion at unbeatable prices. Limited time offers with
              fast delivery, secure payments, and exciting deals waiting for
              you.
            </p>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-blue-100 dark:bg-blue-400 text-blue-900" />
                <p className="font-medium">Guaranteed Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-blue-200 dark:bg-blue-500 text-blue-900" />
                <p className="font-medium">Super Fast Delivery Nationwide</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-blue-300 dark:bg-blue-600 text-blue-900" />
                <p className="font-medium">Multiple Easy Payment Options</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-blue-400 dark:bg-blue-700 text-blue-900" />
                <p className="font-medium">Exclusive Offers & Promo Deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
