import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  _id: string;
  imageSrc: string;
  altText: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, imageSrc, altText, name, price }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="w-[300px] h-[375px] mb-4 relative overflow-hidden md:gap-7 ">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <Link
          href={`/ProdutDetails/${_id}`}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2A254B] text-white px-8 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          View Details
        </Link> 

      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-xl font-normal">${price}</p>
    </div>
  );
};

export default ProductCard;
