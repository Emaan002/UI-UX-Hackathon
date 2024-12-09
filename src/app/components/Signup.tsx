import React from "react";

function Signup() {
  return (
    <section className="max-w-[1440px] mt-12 p-10 bg-[#F9F9F9] flex items-center">
      <div className="max-w-[1273px] bg-white py-8 px-16 text-center mx-auto">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">
        From a studio in London to a global brand with
        over 400 outlets
        </h1>
        <p className="text-gray-600 mb-6">
          Sign up for our newsletter and receive exclusive offers on new <br />
          ranges,sales, pop up stores and more
        </p>
        <div className="flex justify-center mt-14">
          <input
            type="email"
            placeholder="your@email.com"
            className="p-3 border border-gray-300 rounded-l-lg w-64 focus:outline-none"
          />
          <button className="bg-gray-800 text-white p-3  rounded-r-lg">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}

export default Signup;
