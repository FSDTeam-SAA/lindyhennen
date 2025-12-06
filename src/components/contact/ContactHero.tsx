import React from "react";

const ContactHero = () => {
  return (
    <section className="relative bg-[url('/contacthero.jpg')] bg-cover bg-center min-h-[400px] md:min-h-[500px] flex items-center">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className=" text-white">
          <h5 className="text-sm font-normal leading-[120%]  mb-3 text-white!">
            Contact me
          </h5>
          <h2 className="text-lg md:text-4xl py-3 font-bold text-white!">
            Send Me a Message
          </h2>
          <p className="text-base font-normal  leading-[150%] tracking-tight text-gray-200">
            Have questions or ready to get started? Send me a message and
            I&apos;ll respond promptly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
