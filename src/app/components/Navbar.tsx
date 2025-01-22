'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingCart, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:w-full max-w-[1440px] mx-auto px-4 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-3">
        <Search className="w-6 h-6 text-gray-600" />
        <Image src={"/images/Avion.jpg"} alt="logo" width={63} height={28} />
        <div className="flex items-center space-x-4">
          <Link href="/ShoppingCart">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          </Link>
          <Image
            src={"/images/User--avatar.svg"}
            alt="avatar"
            width={24}
            height={24}
          />

          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-md rounded-lg p-4 space-y-4`}
      >
         <Link href={"/"} className="text-gray-700 block">
          Home
        </Link>
        <Link href={"#"} className="text-gray-700 block">
          Plant pots
        </Link>
        <Link href={"#"} className="text-gray-700 block">
          Ceramics
        </Link>
        <Link href={"#"} className="text-gray-700 block">
          Tables
        </Link>
        <Link href={"#"} className="text-gray-700 block">
          Chairs
        </Link>
        <Link href={"#"} className="text-gray-700 block">
          Crockery
        </Link>
        <Link href={"#"} className="text-gray-700 block">
          Tableware
        </Link>
        <Link href={"#"} className="text-gray-700 block">
          Cutlery
        </Link>
        <Link href={"/product"} className="text-gray-700 block">
          All product
        </Link>
      </div>

      {/* Links for Larger Screens */}
      <div className="hidden md:flex justify-center items-center space-x-10 mt-5">
        <Link href={"/"} className="text-gray-700 block">
          Home
        </Link>
        <Link href={"#"} className="text-gray-700">
          Plant pots
        </Link>
        <Link href={"#"} className="text-gray-700">
          Ceramics
        </Link>
        <Link href={"#"} className="text-gray-700">
          Tables
        </Link>
        <Link href={"#"} className="text-gray-700">
          Chairs
        </Link>
        <Link href={"#"} className="text-gray-700">
          Crockery
        </Link>
        <Link href={"#"} className="text-gray-700">
          Tableware
        </Link>
        <Link href={"#"} className="text-gray-700">
          Cutlery
        </Link>
        <Link href="/Product" className="text-gray-700 block">
          All products
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
