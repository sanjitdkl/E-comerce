import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80",
    title: "Upto 50% off on all Men's Wear",
    description:
      "His life will forever be changed. Discover the perfect styles for any occasion with great discounts.",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/17/44/58/174458320f70c88d11f38a4ab39e30db.jpg",
    title: "30% off on all Women's Wear",
    description:
      "Elegant and modern fashion now 30% off. Shop the latest trends today.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80",
    title: "70% off on All Products Sale",
    description:
      "Massive clearance sale! Grab the best deals on your favorite products.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] bg-blue-200 flex justify-center items-center text-black duration-200">
      <div className="container pb-4 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                <div
                  data-aos="fade-right"
                  className="flex flex-col justify-center gap-4 pt-6 sm:pt-0 text-center sm:text-left order-2 sm:order-1 px-4"
                >
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                    {data.title}
                  </h1>
                  <p className="text-base sm:text-lg opacity-90">
                    {data.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-105 duration-200 text-white text-base py-2 px-4 rounded-full shadow"
                  >
                    Order Now
                  </button>
                </div>

                <div data-aos="fade-left" className="order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt="product"
                    className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] object-cover rounded-xl mx-auto shadow"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
