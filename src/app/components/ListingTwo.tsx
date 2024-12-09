import Image from "next/image";

const Home: React.FC = () => {
  return (
    <section className="max-w-[1440px] px-8 mt-6">
      <h1 className="font-medium text-[#2A254B] text-3xl">
        Our Popular Products
      </h1>
      <div className="mt-8 flex flex-col md:flex md:flex-row justify-between gap-x-5">
        <div className="col-span-2 w-[630px]">
          <Image
            src={"/images/Large.png"}
            alt="sofa image"
            width={630}
            height={500}
            className="hidden md:flex w-full object-cover"
          />
          <p className="text-lg mt-3">The Poplar Suede Sofa</p>
          <p className="text-gray-500">£980</p>
        </div>

        
        <div className="col-span-1 w-[305px] ">
          <Image
            src={"/images/Right Image.png"}
            alt="chair image"
            width={305}
            height={375}
            className="w-full object-cover"
          />
          <p className="text-lg mt-3">The Dandy Chair</p>
          <p className="text-gray-500">£250</p>
        </div>

        <div className="col-span-1 w-[305px]">
          <Image
            src={"/images/Photo.png"}
            alt="chair image"
            width={305}
            height={375}
            className="w-full object-cover"
          />
          <p className="text-lg mt-3">The Dandy Chair</p>
          <p className="text-gray-500">£250</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="text-[#2A254B] bg-[#F9F9F9] px-5 py-3 font-Satoshi">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default Home;
