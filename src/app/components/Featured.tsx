import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { SiPurism } from "react-icons/si";
import { LuSprout } from "react-icons/lu";

function Featured() {
  return (
    <section className="max-w-[1440px]">
      <div className="flex flex-col items-center py-10">
        <h1 className="text-2xl font-medium mb-8 font-Clash Display">
          What makes our brand different
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
          <div className="flex flex-col">
            <FaShippingFast className="text-2xl mb-4 " />
            <h4 className="text-lg font-medium font-Clash Display">Next day as standard</h4>
            <p className="text-sm">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="flex flex-col">
            <IoIosCheckmarkCircleOutline className="text-2xl mb-4" />

            <h4 className="text-lg font-mediumfont-Clash Display">Made by true artisans</h4>
            <p className="text-sm">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          <div className="flex flex-col">
            <SiPurism className='text-2xl mb-4' />
            <h4 className="text-lg font-medium font-Clash Display">Unbeatable prices</h4>
            <p className="text-sm">
              For our materials and quality you won&lsquo;t find better prices
              anywhere
            </p>
          </div>
          <div className="flex flex-col">
            <LuSprout className="text-2xl mb-4" />

            <h4 className="text-lg font-medium font-Clash Display">Recycled packaging</h4>
            <p className="text-sm">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
