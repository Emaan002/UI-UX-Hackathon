// 'use client'

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import localFont from "next/font/local";
// import ProductCard from "../components/ProductCard";
// import { client } from '../../sanity/lib/client';

// interface Product {
//   _id: string;
//   // id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// const fontSec = localFont({
//   src: "../fonts/Satoshi-Light.otf",
// });

// // Sanity Query with Pagination
// const fetchProductsQuery = (start: number, limit: number) => `
//   *[_type == "product"] | order(_createdAt desc) [${start}...${start + limit}] {
//     name,
//     description,
//     price,
//     "imageUrl": image.asset->url
//   }
// `;

// const Product = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(8); // Adjust the number of items per page as needed
//   const [totalProducts, setTotalProducts] = useState(0);

//   useEffect(() => {
//     // Fetch the total number of products
//     client
//       .fetch(`count(*[_type == "product"])`)
//       .then((count) => setTotalProducts(count));
//   }, []);

//   useEffect(() => {
//     // Fetch paginated products
//     const start = (currentPage - 1) * itemsPerPage;
//     client.fetch(fetchProductsQuery(start, itemsPerPage)).then((data) => {
//       setProducts(data);
//     });
//   }, [currentPage, itemsPerPage]);

//   const totalPages = Math.ceil(totalProducts / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   return (
//     <div>
//       {/* Header Image */}
//       <div>
//         <Image
//           src="/images/bg.png"
//           alt="Product Banner"
//           width={1440}
//           height={300}
//           objectFit="cover"
//         />
//       </div>

//       {/* Filter and Sorting Section */}
//       <div className="bg-white p-4 shadow-md">
//         <div
//           className={`flex justify-between items-center ${fontSec.className}`}
//         >
//           <div className="flex space-x-4">
//             <div className="relative">
//               <button className="text-gray-700 font-medium">
//                 Category <i className="fas fa-chevron-down"></i>
//               </button>
//             </div>
//             <div className="relative">
//               <button className="text-gray-700 font-medium">
//                 Product type <i className="fas fa-chevron-down"></i>
//               </button>
//             </div>
//             <div className="relative">
//               <button className="text-gray-700 font-medium">
//                 Price <i className="fas fa-chevron-down"></i>
//               </button>
//             </div>
//             <div className="relative">
//               <button className="text-gray-700 font-medium">
//                 Brand <i className="fas fa-chevron-down"></i>
//               </button>
//             </div>
//           </div>
//           <div className="flex space-x-2 items-center">
//             <span className="text-gray-700 font-medium">Sorting by:</span>
//             <div className="relative">
//               <button className="text-gray-700 font-medium">
//                 Date added <i className="fas fa-chevron-down"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="p-8 gap-x-2 mt-6 md:gap-x-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
//         {products.map((product) => (
//           <ProductCard
//           key={product._id}
//           _id={product._id}
//           imageSrc={product.imageUrl}
//           altText={product.name}
//           name={product.name}
//           price={product.price}
//           />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center p-4">
//         <button
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-gray-700">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Product;


'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import ProductCard from '../components/ProductCard';
import { client } from '../../sanity/lib/client';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const fontSec = localFont({
  src: '../fonts/Satoshi-Light.otf',
});

// Sanity Query with Pagination
const fetchProductsQuery = (start: number, limit: number) => `
  *[_type == "product"] | order(_createdAt desc) [${start}...${start + limit}] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url
  }
`;

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Adjust the number of items per page as needed
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    // Fetch the total number of products
    client
      .fetch(`count(*[_type == "product"])`)
      .then((count) => setTotalProducts(count));
  }, []);

  useEffect(() => {
    // Fetch paginated products
    const start = (currentPage - 1) * itemsPerPage;
    client.fetch(fetchProductsQuery(start, itemsPerPage)).then((data) => {
      setProducts(data);
    });
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* Header Image */}
      <div>
        <Image
          src="/images/bg.png"
          alt="Product Banner"
          width={1440}
          height={300}
          objectFit="cover"
        />
      </div>

      {/* Filter and Sorting Section */}
      <div className="bg-white p-4 shadow-md">
        <div className={`flex justify-between items-center ${fontSec.className}`}>
          <div className="flex space-x-4">
            <button className="text-gray-700 font-medium">Category</button>
            <button className="text-gray-700 font-medium">Product type</button>
            <button className="text-gray-700 font-medium">Price</button>
            <button className="text-gray-700 font-medium">Brand</button>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="text-gray-700 font-medium">Sorting by:</span>
            <button className="text-gray-700 font-medium">Date added</button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-8 gap-6 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id || Math.random()} // Unique key fallback
            _id={product._id}
            imageSrc={product.imageUrl}
            altText={product.name}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center p-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
