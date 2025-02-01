"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import {
  useUser,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user } = useUser();

  return (
    <nav className="md:w-full max-w-[1440px] mx-auto px-4 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-3">
        <Search className="w-6 h-6 text-gray-600" />
        <Image src={"/images/Avion.jpg"} alt="logo" width={63} height={28} />
        <div className="flex items-center space-x-4">
          <Link href="/ShoppingCart">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
          </Link>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-0">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={user ? user.imageUrl : "/images/User--avatar.svg"}
                    alt="User Avatar"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="p-4 bg-white shadow-lg rounded-md">
              {user ? (
                <div className="text-center">
                  <Avatar className="w-12 h-12 mx-auto mb-2">
                    <AvatarImage src={user.imageUrl} alt="User Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{user.fullName}</p>
                  <p className="text-xs text-gray-500">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>

                  <div className="mt-3 flex flex-col gap-2">
                    <Button asChild variant="outline" className="w-full">
                      <a href="/profile">View Profile</a>
                    </Button>

                    <SignOutButton>
                      <Button variant="destructive" className="w-full">
                        Sign Out
                      </Button>
                    </SignOutButton>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    You are not signed in
                  </p>
                  <SignUpButton>
                    <Button variant="default" className="w-full">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
            </PopoverContent>
          </Popover>

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
