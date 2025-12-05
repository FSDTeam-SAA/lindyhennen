"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Testimonial() {
  const reviews = [
    {
      id: 1,
      name: "Robert & Melissa Griffin",
      rating: 5,
      comment:
        "Lindy was EXCELLENT to work with for purchasing our new home. She was always available for questions, offered sound advice, and is THE reason we were able to move into our new home without significant delay. Highly recommend!",
    },
    {
      id: 2,
      name: "Kendra Schmitz",
      rating: 5,
      comment:
        "Lindy helped us buy our first home, and the entire process went better than I ever could have imagined! She is very knowledgeable, super communicative, and really had our best interest in mind through the whole process. She went above and beyond to help us out every step of the way. If you are looking to buy or sell, I 100% recommend reaching out to Lindy!",
    },
    {
      id: 3,
      name: "Vicky Lommel",
      rating: 5,
      comment:
        "We couldn't asked for a better realtor for our first home buying experience. Lindy is an expert in her field! I would recommend her to all my friends and family!",
    },
    {
      id: 4,
      name: "Pam Pringle",
      rating: 5,
      comment:
        "Office staff is always friendly and helpful.  I can't say enough good things about Dr. Colby.  Thorough, caring, concerned and always explains things in detail.  I absolutely trust his judgment and feel that he has my best interests at heart.  I am a loyal patient!",
    },
    {
      id: 5,
      name: "Callie hennen",
      rating: 5,
      comment:
        "Great Realtor and overall great person, very helpful and extremely intelligent, very glad I chose Lindy to be my realtor, would recommend her to anyone looking to own a home!",
    },
    {
      id: 6,
      name: "John Polski",
      rating: 5,
      comment:
        "Lindy was great to work with. Super friendly, knowledgeable and great communication.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const review = reviews[currentIndex];

  return (
    <section className="lg:py-20 py-8">
      <div className="container mx-auto min-h-screen relative bg-[url('/testimonial.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute right-0 -top-12">
          <Image
            src="/client1.png"
            alt="client"
            width={500}
            height={500}
            className="w-96 aspect-4/5 object-cover rounded-lg"
          />
        </div>
        <div className="absolute right-0 -bottom-12">
          <Image
            src="/client2.png"
            alt="client"
            width={500}
            height={500}
            className="w-96 aspect-square object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-0 -bottom-12">
          <Image
            src="/client3.png"
            alt="client"
            width={500}
            height={500}
            className="w-96 aspect-4/5 object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-0 -top-12">
          <Image
            src="/client4.png"
            alt="client"
            width={500}
            height={500}
            className="w-96 aspect-square object-cover rounded-lg"
          />
        </div>

        <div className="h-screen flex justify-center items-center">
          <div className="space-y-16 max-w-4xl">
            <div className="text-center space-y-4">
              <h5 className="lg:text-base text-sm">Testimoninials</h5>
              <h2 className="lg:text-6xl font-bold">What My Clients Say</h2>
            </div>
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Review Item */}
              <div className="p-4 border border-primary rounded-lg shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <h5>{review.name}</h5>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) =>
                        star <= review.rating ? (
                          <Star key={star} className="text-yellow-500" />
                        ) : (
                          <Star key={star} className="text-gray-300" />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="mt-2">{review.comment}</p>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex gap-4">
                <button
                  onClick={prev}
                  className="px-4 py-2 bg-primary text-white rounded cursor-pointer transition"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="px-4 py-2 bg-primary text-white rounded cursor-pointer transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
