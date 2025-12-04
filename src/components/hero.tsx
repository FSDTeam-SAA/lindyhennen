import React from "react";

export default function Hero() {
  return (
    <section className="relative z-10 md:h-[92vh] h-[35vh] w-full flex items-center justify-center bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-20 -z-10"></div>
      <div className="text-center lg:space-y-8 space-y-4 text-white">
        <h1 className="lg:text-6xl md:text-4xl text-lg font-bold text-white!">
          Find Your Perfect Home with Confidence
        </h1>
        <p className="lg:text-lg text-sm md:text-base text-shadow-lg text-shadow-black">
          Trusted real estate guidance for buying, selling, and home valuation
          in your local market.
        </p>
        <button className="bg-primary md:px-12 px-4 text-sm lg:text-base py-3 rounded-md">
          Find Your Home Valuation
        </button>
      </div>
    </section>
  );
}
