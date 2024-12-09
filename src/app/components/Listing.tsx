import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  return (
<section className="max-w-[1440px] mx-auto mt-6">
    <h1 className='px-8 font-medium text-[#2A254B] text-3xl'>New Ceramics</h1>
    <div className=" p-8 gap-x-10 md:gap-x-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <ProductCard
        imageSrc="/images/Right Image.png" 
        altText="Product 1"
        name="The Dandy chair"
        price={250}
      />
      <ProductCard
        imageSrc="/images/parent.png"
        altText="Product 2"
        name="Rustic Vase Set"
        price={165}
        className='space-x-5'
      />
      <ProductCard
        imageSrc="/images/parent1.png"
        altText="Product 3"
        name="The Silky Vase"
        price={155}
      />
       <ProductCard
        imageSrc="/images/parent2.png"
        altText="Product 3"
        name="The Lucy Lamp"
        price={399}
      />
    </div>
    <div className='flex justify-center items-center'>
    <button className='text-[#2A254B] bg-[#F9F9F9] px-5 py-3 font-Satoshi'>View Collection</button>
    </div>
</section> 
  );
};

export default Home;
