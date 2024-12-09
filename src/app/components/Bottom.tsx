import React from "react";
import Image from "next/image";

function Bottom() {
  return (
    <section className="flex flex-col md:flex-row max-w-[1440px] my-10 mx-auto px-4 md:px-14">
      {/* Left Section */}
      <div className="flex flex-col bg-white px-4 py-8 md:px-14 md:py-8 w-full">
        <h1 className="text-[#2A254B] text-2xl md:text-3xl mb-6">
          The furniture brand for the <br />
          future, with timeless designs
        </h1>

        <p className="text-[#505977] mb-6 md:mt-14">
          When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
          <br />
          <br />
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique became the hotbed for the
          London interior design community.
        </p>

        <button className="text-[#2A254B] bg-[#F9F9F9] px-8 py-4 font-normal mt-auto md:mt-[196px]">
          Get in touch
        </button>
      </div>

      {/* Right Section */}
      <Image
        src={"/images/hero2.png"}
        alt="Chair image"
        width={520}
        height={500}
        className="mt-6 md:mt-0"
      />
    </section>
  );
}

export default Bottom;
