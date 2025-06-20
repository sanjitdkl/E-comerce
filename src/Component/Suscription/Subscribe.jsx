import React from "react";

const BannerImg = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-blue-100 dark:bg-blue-900 text-white  shadow-lg overflow-hidden"
    >
      <div className="container backdrop-blur-md py-14 px-6">
        <div className="space-y-8 max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-wide">
            Stay Updated with Our Latest Products
          </h1>

          <p className="text-lg text-blue-100/80 dark:text-blue-200/70 leading-relaxed">
            Subscribe to our newsletter and be the first to know about new
            arrivals, exclusive offers, and special discounts directly in your
            inbox.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
            data-aos="fade-up"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-2/3 px-5 py-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 text-white rounded-lg font-semibold shadow-md">
              Subscribe Now
            </button>
          </div>

          <p className="text-sm text-blue-100/70 dark:text-blue-200/50 pt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
