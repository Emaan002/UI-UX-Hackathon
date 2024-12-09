import React from "react";
import Image from "next/image";  

const ShoppingCart = () => {
  return (
  <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md mt-6">
  <h1 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Your shopping cart</h1>
  <table className="w-full text-left">
    <thead>
      <tr className="border-b">
        <th className="pb-2">Product</th>
        <th className="pb-2 hidden sm:table-cell">Quantity</th>
        <th className="pb-2 text-right sm:text-left">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b flex flex-col sm:table-row">
        <td className="py-4 flex items-center">
          <Image
            src={'/images/Parent.png'}
            alt="product"
            width={109}
            height={134}
            className="w-24 sm:w-auto"
          />
          <div>
            <p className="font-medium ml-2">Graystone vase</p>
            <p className="text-gray-500 ml-2 text-sm sm:text-base">
              A timeless ceramic vase with a soft color gray glaze.
            </p>
            <p className="text-gray-500 ml-2">£85</p>
          </div>
        </td>
        <td className="py-4 text-center hidden sm:table-cell">1</td>
        <td className="py-4 text-right sm:text-left">£85</td>
      </tr>
      <tr className="border-b flex flex-col sm:table-row">
        <td className="py-4 flex items-center">
          <Image
            src={'/images/Product Image.png'}
            alt="product"
            width={109}
            height={134}
            className="w-24 sm:w-auto"
          />
          <div>
            <p className="font-medium ml-2">Basic white vase</p>
            <p className="text-gray-500 ml-2 text-sm sm:text-base">
              Beautiful and simple, this is one for the classics.
            </p>
            <p className="text-gray-500 ml-2">£125</p>
          </div>
        </td>
        <td className="py-4 text-center hidden sm:table-cell">1</td>
        <td className="py-4 text-right sm:text-left">£125</td>
      </tr>
    </tbody>
  </table>
  <div className="flex flex-col sm:flex-row justify-between sm:justify-end mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
    <div className="text-right">
      <p className="text-gray-500">Subtotal</p>
      <p className="text-xl sm:text-2xl font-medium">£210</p>
      <p className="text-gray-500 text-sm">Taxes and shipping are calculated at checkout</p>
    </div>
    <button className="px-6 py-2 bg-[#2A254B] text-white text-center rounded-md w-full sm:w-auto">
      Go to checkout
    </button>
  </div>
</div>

  );
};

export default ShoppingCart;