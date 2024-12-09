import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  altText: string;  
  name: string;    
  price: number;
  className?: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, altText, name, price,className='' }) => {
  return (
    <div className={`"flex flex-col ${className}"`}>
      <div className="w-[300px] h-[375px]  mb-4 relative">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill" 
          objectFit="cover"
          className='p-1'
        />
      </div>
      <h3 className="font-clash Display text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="font-clash Display font-normal text-xl">${price}</p>
    </div>
  );
};

export default ProductCard;
