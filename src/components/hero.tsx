import React from "react";

export default function Hero() {
  return (
    <section className="relative z-10 md:h-[92vh] h-[35vh] w-full flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-primary opacity-10 -z-10"></div>
      <div className="text-center lg:space-y-8 space-y-4 text-white">
        <h1 className="lg:text-6xl md:text-4xl text-lg font-bold text-white!">
          Find Your Perfect Home
        </h1>
        <p className="lg:text-lg text-sm md:text-base text-shadow-lg text-shadow-primary">
          Trusted real estate guidance for buying, selling, and home valuation
          in your local market.
        </p>
        <a
          href="https://app.cloudcma.com/api_widget/ffd3e4264029aca20f64bffc6d9db141/show?post_url=https://app.cloudcma.com&source_url=ua"
          target="_blank"
        >
          <button className="bg-primary md:px-12 px-4 text-sm lg:text-base py-3 rounded-md cursor-pointer">
            Find Your Home Valuation
          </button>
        </a>
      </div>
    </section>
  );
}
