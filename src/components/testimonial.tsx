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
      href: "https://maps.app.goo.gl/hvXotenRnkSDQaeu8",
    },
    {
      id: 2,
      name: "Kendra Schmitz",
      rating: 5,
      comment:
        "Lindy helped us buy our first home, and the entire process went better than I ever could have imagined! She is very knowledgeable, super communicative, and really had our best interest in mind through the whole process. She went above and beyond to help us out every step of the way. If you are looking to buy or sell, I 100% recommend reaching out to Lindy!",
      href: "https://maps.app.goo.gl/DvepXrA3T4rTTMt6A",
    },
    {
      id: 3,
      name: "Vicky Lommel",
      rating: 5,
      comment:
        "We couldn't asked for a better realtor for our first home buying experience. Lindy is an expert in her field! I would recommend her to all my friends and family!",
      href: "https://maps.app.goo.gl/Uv61GpzWmsTaMDto9",
    },
    {
      id: 4,
      name: "Pam Pringle",
      rating: 5,
      comment:
        "Office staff is always friendly and helpful.  I can't say enough good things about Dr. Colby.  Thorough, caring, concerned and always explains things in detail.  I absolutely trust his judgment and feel that he has my best interests at heart.  I am a loyal patient!",
      href: "https://maps.app.goo.gl/tn4DB8C7vsdhC93AA",
    },
    {
      id: 5,
      name: "Callie hennen",
      rating: 5,
      comment:
        "Great Realtor and overall great person, very helpful and extremely intelligent, very glad I chose Lindy to be my realtor, would recommend her to anyone looking to own a home!",
      href: "https://maps.app.goo.gl/N5xkh8dyiBF2BaX79",
    },
    {
      id: 6,
      name: "John Polski",
      rating: 5,
      comment:
        "Lindy was great to work with. Super friendly, knowledgeable and great communication.",
      href: "https://maps.app.goo.gl/1E5QwnFwbbH8yZ1k8",
    },
    {
      id: 7,
      name: "Andi Boo",
      rating: 5,
      comment:
        "Lindy was so amazing in helping us with everything. She made the whole process feel so much easier. I can't recommend her enough.",
      href: "https://maps.app.goo.gl/kRMWnrCzY7RznJwn9",
    },
    {
      id: 8,
      name: "Lain Harken",
      rating: 5,
      comment:
        "Lindy is great, super professional and speedy responses. She answered all my questions and concerns",
      href: "https://maps.app.goo.gl/MHoEdyL6EJq6ehZF6",
    },
    {
      id: 9,
      name: "Andrea Hennen",
      rating: 5,
      comment:
        "Lindy was great to work with through the whole process and guided us along every step of the way. I couldn’t give a higher rating or I would!",
      href: "https://maps.app.goo.gl/z5bF7PzTjXJ4C7Gb6",
    },
    {
      id: 10,
      name: "Luke Vanbeck",
      rating: 5,
      comment:
        "Lindy helped us find our first home and was great to work with!",
      href: "https://maps.app.goo.gl/c9bDvjYQHhKGA4u56",
    },
    {
      id: 11,
      name: "Alicia Gerads",
      rating: 5,
      comment:
        "Lindy was so great! She was so prompt with everything; always got back to us immediately when we emailed her or had any questions. I felt so prepared going into closing with all the advice she gave us. And she was super down to earth, great personality. We would recommend Lindy to anyone!",
      href: "https://maps.app.goo.gl/NsumPykxmsHtovtB8",
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
      <div className="container mx-auto min-h-screen relative overflow-hidden xl:overflow-visible z-20 bg-[url('/testimonial.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute right-0 -top-12 z-10">
          <Image
            src="/client1.png"
            alt="client"
            width={500}
            height={500}
            className="w-96 aspect-4/5 object-cover rounded-lg"
          />
        </div>
        <div className="absolute right-0 -bottom-12 z-10">
          <Image
            src="/client2.png"
            alt="client"
            width={500}
            height={500}
            className="w-96 aspect-square object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-0 -bottom-12 z-10">
          <Image
            src="/client3.png"
            alt="client3"
            width={500}
            height={500}
            className="w-96 aspect-4/5 object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-0 -top-12 z-10">
          <Image
            src="/client4.png"
            alt="client"
            width={500}
            height={500}
            className="w-96 aspect-square object-cover rounded-lg"
          />
        </div>

        <div className="absolute inset-0 w-full bg-black opacity-80 z-10 xl:hidden rounded-md"></div>

        <div className="h-screen flex justify-center items-center z-30 relative">
          <div className="space-y-16 max-w-4xl relative z-20 p-2">
            <div className="absolute inset-0 w-full bg-black opacity-70 -z-10 h-full rounded-md"></div>
            <div className="text-center space-y-4">
              <h5 className="lg:text-base text-sm text-white!">
                Testimoninials
              </h5>
              <h2 className="lg:text-6xl font-bold text-white!">
                What My Clients Say
              </h2>
            </div>
            <div className="relative w-full max-w-3xl mx-auto px-2 lg:px-0">
              {/* Review Item */}
              <div className="p-4 border border-primary rounded-lg shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-white!">{review.name}</h5>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) =>
                        star <= review.rating ? (
                          <Star
                            key={star}
                            className="text-yellow-500"
                            fill="yellow"
                          />
                        ) : (
                          <Star key={star} className="text-gray-300" />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-white!">{review.comment}</p>
              </div>
              <div className="text-end text-white">
                <a
                  href={review.href}
                  target="_blank"
                  className="text-xs lg:text-base"
                >
                  See review on google
                </a>
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
