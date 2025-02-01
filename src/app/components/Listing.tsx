'use client';

import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import ProductCard from "../components/ProductCard";
import localFont from "next/font/local";


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

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] [3..6] {
        _id,
        name,
        price,
        description,
        "imageUrl": image.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
  <section className="max-w-[1440px] mx-auto px-8 mt-6">
  <h1 className={`${font.className} text-3xl font-bold text-[#2A254B]`}>
    New Ceramics
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 mt-6">
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
</section>

  );
};

export default HomePage;

