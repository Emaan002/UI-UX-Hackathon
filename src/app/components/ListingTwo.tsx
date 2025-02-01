"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import localFont from "next/font/local";
import { client } from "../../sanity/lib/client";

const font = localFont({
  src: "../fonts/ClashDisplay-Extralight.otf",
});


interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

// Define the query to fetch the products
const query = `
  *[_type == "product" && _id in ["product-10", "product-9", "product-24","product-16"]] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url
  }
`;

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from Sanity
    client.fetch(query).then((data) => setProducts(data));
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-8 mt-6">
      <h1 className={`${font.className} font-bold text-[#2A254B] text-3xl`}>
        Our Popular Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
        {products.map((product) => (
          <div
            key={product._id} 
            className="w-[305px]"
          >
            <ProductCard
              key={product._id}
              _id={product._id}
              imageSrc={product.imageUrl}
              altText={product.name}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="text-[#2A254B] bg-[#F9F9F9] px-5 py-3 font-Satoshi">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default Home;



