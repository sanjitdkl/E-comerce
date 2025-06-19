import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: "https://img.drz.lazcdn.com/static/np/p/ede5489d29bfb935b579c155e8288bba.jpg_960x960q80.jpg_.webp",
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/716xf9DSdvL._AC_UY1100_DpWeblab_.jpg",
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "https://img.drz.lazcdn.com/static/np/p/8695cfe4f154f293830724c216d3bbba.jpg_720x720q80.jpg",
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "https://shopgroove.pk/cdn/shop/products/Short-Sleeve-T-Shirt-Men-S-For-2021-Summer-Print-Black-White-Tshirt-Top-Tees-Classic-1.jpg?v=1664899421",
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Black",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "White",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-600 font-medium">
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-blue-900">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500">
            Discover our most popular products with great style and value.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Product Cards */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 bg-white shadow-md p-3 rounded-md hover:shadow-lg transition-all duration-200"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-blue-900">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <FaStar className="text-yellow-400" />
                    <span className="text-blue-700">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-md shadow transition-all duration-200">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
