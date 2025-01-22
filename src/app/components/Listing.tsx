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
    <section className=" px-8  gap-x-8" >
    <h1 className={`${font.className} text-3xl font-bold text-[#2A254B]`}>New Ceramics</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      {/* gap-6 ensures proper spacing between all grid items */}
      {products.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          imageSrc={product.imageUrl}
          altText={product.name}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  </section>
  
  );
};

export default HomePage;

