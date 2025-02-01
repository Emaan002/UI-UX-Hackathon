import React from "react";
import Image from "next/image";

function Bottom() {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-[1440px] my-10 mx-auto px-4 md:px-14 gap-8">
  <div className="flex flex-col bg-white px-4 py-8 md:px-14 md:py-10 w-full md:w-1/2">
    <h1 className="text-[#2A254B] text-2xl sm:text-3xl md:text-4xl mb-6 leading-snug">
      The furniture brand for the <br className="hidden md:block" />
      future, with timeless designs
    </h1>

    <p className="text-[#505977] text-sm sm:text-base md:text-lg mb-6 md:mt-10 leading-relaxed">
      When we started Avion, the idea was simple. Make high-quality furniture
      affordable and available for the mass market.
      <br />
      <br />
      Handmade, and lovingly crafted furniture and homeware is what we live,
      breathe, and design. Our Chelsea boutique became the hotbed for the
      London interior design community.
    </p>

    <button className="text-[#2A254B] bg-[#F9F9F9] px-6 py-3 sm:px-8 sm:py-4 font-normal w-fit">
      Get in touch
    </button>
  </div>


  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src="/images/hero2.png"
      alt="Chair image"
      width={520}
      height={500}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg"
    />
  </div>
</section>

  );
}

export default Bottom;
