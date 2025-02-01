"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";

interface CartItem {
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useUser();
  const { openSignUp } = useClerk();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const handleRemove = (title: string) => {
    const updatedCart = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md my-14">
      <h1 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Product</th>
                <th className="pb-2">Quantity</th>
                <th className="pb-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.title} className="border-b">
                  <td className="py-4 flex items-center">
                    <Image src={item.image} alt={item.title} width={80} height={80} className="w-20 h-20 rounded" />
                    <div className="ml-4">
                      <p className="font-medium">{item.title}</p>
                    </div>
                  </td>
                  <td className="py-4">{item.quantity}</td>
                  <td className="py-4 text-right">${item.price * item.quantity}</td>
                  <td className="py-4 text-center">
                    <button onClick={() => handleRemove(item.title)} className="text-red-500 hover:text-red-700 font-medium ml-4">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right mt-6">
            <p className="text-gray-500">Subtotal</p>
            <p className="mb-2 text-xl font-medium">${subtotal.toFixed(2)}</p>

            {/* If user is not signed in, show the sign-up button */}
            {!user ? (
              <button
                onClick={() => openSignUp({})} // Opens sign-up modal
                className="px-6 py-2 mt-4 bg-[#2A254B] text-white rounded-md"
              >
                Sign Up to Checkout
              </button>
            ) : (
              <Link href="/checkout" className="mt-4 px-6 py-2 bg-[#2A254B] text-white rounded-md">
                Go to Checkout
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
