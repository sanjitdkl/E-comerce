import React from "react";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80",
    title: "Casual Wear",
    description:
      "Comfortable and stylish casual wear perfect for everyday use.",
  },
  {
    id: 2,
    img: "https://claudioluglishirts.com/cdn/shop/files/multicolour-polkadot-womens-print-shirt-557160.jpg?v=1748606691",
    title: "Printed Shirt",
    description:
      "Bright and colorful printed shirts to brighten your wardrobe.",
  },
  {
    id: 3,
    img: "https://www.wisconline.co.uk/images/min/A55-min.jpg",
    title: "Women Shirt",
    description: "Elegant and comfortable women's shirts for all occasions.",
  },
  {
    id: 4,
    img: "https://9f8e62d4.delivery.rocketcdn.me/wp-content/uploads/2023/11/How-To-Wear-Mens-Denim-Shirts-sunglasses.jpg",
    title: "Denim Shirt",
    description:
      "Classic denim shirts that pair well with anything in your closet.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=300&q=80",
    title: "Formal Shirt",
    description: "Perfectly tailored formal shirts for your professional look.",
  },
  {
    id: 6,
    img: "https://bornprimitive.com/cdn/shop/files/MERGED_0073_Layer130_1080x.jpg?v=1696513894",
    title: "Flannel Shirt",
    description: "Cozy and warm flannel shirts ideal for cooler days.",
  },
  {
    id: 7,
    img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/y/30/968c0bba-a5da-43c2-8405-64459df7372c.jpg",
    title: "Linen Shirt",
    description: "Lightweight linen shirts great for summer comfort and style.",
  },
  {
    id: 8,
    img: "https://brooksbrothers.bynder.com/match/WebName/MG04414_TURQUOISE/FRIDAY_SHIRT_S",
    title: "Short Sleeve Shirt",
    description: "Casual short sleeve shirts perfect for warm weather.",
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzvwh-B8qkDlcqjfyMUzU2Y-8ruIFLVrcBA&s",
    title: "Checked Shirt",
    description:
      "Stylish checked shirts available in various colors and patterns.",
  },
  {
    id: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_OEzQT80CJpsnGqPCXjZm27jzlWu-aHsyA&s",
    title: "Chambray Shirt",
    description: "Soft chambray shirts combining comfort and casual style.",
  },
  {
    id: 11,
    img: "https://cdn.shopify.com/s/files/1/0611/3476/6320/files/Men_s_Casual_Striped_Long_Sleeve_Shirt_Spring_And_Autumn_480x480.jpg?v=1722862549",
    title: "Striped Shirt",
    description: "Classic striped shirts for a timeless look.",
  },
  {
    id: 12,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJ979ztromOgpeA9oReIWrpn20JEQae5EXA&s",
    title: "Oxford Shirt",
    description: "Versatile Oxford shirts for casual and formal wear.",
  },
  {
    id: 13,
    img: "https://store.cooph.com/cdn/shop/products/CO_BigPocketShirt_THE_HUNTER_LR_0002.jpg?v=1473942981",
    title: "Pocket Shirt",
    description: "Shirts with pockets for added style and practicality.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-blue-500">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-blue-700">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-blue-400">
            People buy this product
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-blue-500 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              <div>
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto group-hover:scale-105 duration-300 drop-shadow-md rounded-md"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <h1 className="text-xl font-bold text-blue-700">
                  {data.title}
                </h1>
                <p className="text-blue-600 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-blue-600 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-blue-600"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
