import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Amazing service! The team was very helpful and the products exceeded my expectations.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "I highly recommend this company. Fast delivery, excellent support, and great quality.",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Very satisfied with my purchase. Will definitely shop again. Thank you for the great experience!",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 mb-16 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100">
      <div className="container mx-auto px-4">
        {/* header section */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-blue-500 uppercase tracking-wider font-semibold mb-2"
          >
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-extrabold mb-4">
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="text-md text-blue-700/80 dark:text-blue-300/80"
          >
            Here's what our valued customers say about our products and
            services.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-4">
                <div className="flex flex-col items-center gap-4 shadow-xl py-8 px-6 rounded-2xl bg-white dark:bg-blue-900/80 relative border border-blue-200 dark:border-blue-800 transition-transform hover:scale-105 duration-300">
                  {/* Quotation mark */}
                  <p className="text-blue-100/30 text-9xl font-serif absolute top-0 right-5 select-none">
                    “
                  </p>

                  {/* Image */}
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-24 h-24 border-4 border-blue-400 shadow-md"
                  />

                  {/* Text */}
                  <div className="text-center space-y-3 px-2">
                    <p className="text-md text-blue-800 dark:text-blue-100">
                      {data.text}
                    </p>
                    <h1 className="text-xl font-bold text-blue-900 dark:text-white mt-2">
                      {data.name}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
