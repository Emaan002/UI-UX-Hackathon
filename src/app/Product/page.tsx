'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import { client } from '../../sanity/lib/client';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

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

      <div className="p-8 gap-6 md:gap-6 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
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
