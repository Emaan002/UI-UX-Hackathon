import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import localFont from "next/font/local";

const font = localFont({
  src: '../fonts/ClashDisplay-Extralight.otf',

})

const fontSec = localFont({
  src: '../fonts/Satoshi-Light.otf',

})


function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white py-8 mb-0">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className={`${font.className} font-bold mb-4`}>Menu</h3>
            <ul className={`${fontSec.className}`}>
              <li className="mb-2">
                <a href="#">New arrivals</a>
              </li>
              <li className="mb-2">
                <a href="#">Best sellers</a>
              </li>
              <li className="mb-2">
                <a href="#">Recently viewed</a>
              </li>
              <li className="mb-2">
                <a href="#">Popular this week</a>
              </li>
              <li className="mb-2">
                <a href="#">All products</a>
              </li>
            </ul>
          </div>

       
          <div className="sm:ml-4">
            <h3 className={`${font.className} font-bold mb-4`}>Categories</h3>
            <ul  className={`${fontSec.className}`}>
              <li className="mb-2">
                <a href="#">Crockery</a>
              </li>
              <li className="mb-2">
                <a href="#">Furniture</a>
              </li>
              <li className="mb-2">
                <a href="#">Homeware</a>
              </li>
              <li className="mb-2">
                <a href="#">Plant pots</a>
              </li>
              <li className="mb-2">
                <a href="#">Chairs</a>
              </li>
              <li className="mb-2">
                <a href="#">Crockery</a>
              </li>
            </ul>
          </div>

         
          <div className="md:col-span-1 sm:col-span-2">
            <h3 className={`${font.className} font-bold mb-4`}>Our company</h3>
            <ul  className={`${fontSec.className}`}>
              <li className="mb-2">
                <Link href={"/About"}>About us</Link>
              </li>
              <li className="mb-2">
                <Link href={"/ShoppingCart"}>Shopping Cart</Link>
              </li>
              <li className="mb-2">
                <a href="#">Vacancies</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact us</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="#">Returns policy</a>
              </li>
            </ul>
          </div>

          
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className={`${font.className} font-bold mb-4`}>Join our mailing list</h3>
            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="p-2 flex-grow bg-[#3A2E6E] text-white border-none placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-white text-[#2E265F] px-4 py-2">
                Sign up
              </button>
            </div>
          </div>
        </div>

      
        <div className="mt-8 border-t border-[#3A2E6E] pt-4 flex flex-wrap justify-between items-center">
          <p className="text-sm w-full md:w-auto text-center md:text-left">
            &copy; 2022 Avion LTD
          </p>
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0 w-full md:w-auto">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaSkype />
            <FaPinterest />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
