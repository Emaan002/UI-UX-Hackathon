"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import localFont from "next/font/local";

const font = localFont({
  src: "../../fonts/ClashDisplay-Extralight.otf",
});

interface Dimensions {
  height: number;
  width: number;
  depth: number;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  dimensions: Dimensions;
}

interface CartItem {
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  dimensions: Dimensions;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $id][0] {
        _id,
        name,
        description,
        price,
        dimensions {
          height,
          width,
          depth
        },
        "imageUrl": image.asset->url
      }`;

      try {
        const data = await client.fetch(query, { id });
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details.");
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const existingProductIndex = existingCart.findIndex(
        (item: CartItem) => item.title === product.name
      );

      if (existingProductIndex >= 0) {
        existingCart[existingProductIndex].quantity += quantity;
      } else {
        existingCart.push({
          title: product.name,
          description: product.description,
          dimensions: product.dimensions,
          price: product.price,
          image: product.imageUrl,
          quantity: quantity,
        });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      alert(`${product.name} has been added to your cart.`);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (error) return <div className="text-red-500">{error}</div>;

  if (!product) return <div>Loading...</div>;

  return (
    <div className={`${font.className} max-w-4xl mx-auto p-8`}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-lg w-[300px] h-[375px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          {product.dimensions && (
            <div className="text-gray-700 mb-4">
              <h3 className="font-semibold">Dimensions:</h3>
              <p>Height: {product.dimensions.height} cm</p>
              <p>Width: {product.dimensions.width} cm</p>
              <p>Depth: {product.dimensions.depth} cm</p>
            </div>
          )}
          <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
          <div className="flex items-center mb-4">
            <button
              onClick={decreaseQuantity}
              className="bg-gray-300 text-black px-2 py-1 rounded-l"
            >
              -
            </button>
            <span className="px-4 py-1 border">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-300 text-black px-2 py-1 rounded-r"
            >
              +
            </button>
          </div>
          <button
             onClick={handleAddToCart}
             className="bg-[#2A254B] text-white px-4 py-2 rounded transition duration-300"
           >           
            <Link href="/ShoppingCart">Add to Cart</Link>
           </button> 
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
