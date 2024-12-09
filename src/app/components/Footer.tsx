import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white py-8">
    <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div>
                <h3 className="font-bold mb-4">Menu</h3>
                <ul>
                    <li className="mb-2"><a href="#">New arrivals</a></li>
                    <li className="mb-2"><a href="#">Best sellers</a></li>
                    <li className="mb-2"><a href="#">Recently viewed</a></li>
                    <li className="mb-2"><a href="#">Popular this week</a></li>
                    <li className="mb-2"><a href="#">All products</a></li>
                </ul>
            </div>
            <div className='ml-[10px]'>
                <h3 className="font-bold mb-4">Categories</h3>
                <ul>
                    <li className="mb-2"><a href="#">Crockery</a></li>
                    <li className="mb-2"><a href="#">Furniture</a></li>
                    <li className="mb-2"><a href="#">Homeware</a></li>
                    <li className="mb-2"><a href="#">Plant pots</a></li>
                    <li className="mb-2"><a href="#">Chairs</a></li>
                    <li className="mb-2"><a href="#">Crockery</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-4">Our company</h3>
                <ul>
                    <li><Link href={'/About'}>About us</Link></li>
                    <li><Link href={'/ShoppingCart'}>Shopping Card</Link></li>
                    <li className="mb-2"><a href="#">Vacancies</a></li>
                    <li className="mb-2"><a href="#">Contact us</a></li>
                    <li className="mb-2"><a href="#">Privacy</a></li>
                    <li className="mb-2"><a href="#">Returns policy</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-4">Join our mailing list</h3>
                <div className="flex w-[350px]">
                    <input type="email" placeholder="your@email.com" className="p-2 flex-grow bg-[#3A2E6E] text-white border-none" />
                    <button className="bg-white text-[#2E265F] p-2">Sign up</button>
                </div>
            </div>
        </div>
        <div className="mt-8 border-t border-[#3A2E6E] pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2022 Avion LTD</p>
            <div className="hidden md:flex space-x-4 mt-4 md:mt-0">
                <FaLinkedin />
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
                <FaSkype/>
                <FaPinterest/>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer