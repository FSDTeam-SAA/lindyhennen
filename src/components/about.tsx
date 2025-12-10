import Image from "next/image";
import React from "react";

export default function About() {
  const stats = [
    {
      id: 1,
      value: "50+",
      label: "Happy Clients",
      description: "Successfully assisted 50+ home buyers and sellers.",
    },
    {
      id: 2,
      value: "50+",
      label: "Homes Sold",
      description: "Over 50 properties closed with trusted guidance.",
    },
    {
      id: 3,
      value: "5+",
      label: "Years of Experience",
      description: "Bringing 5+ years of real estate expertise to clients.",
    },
    {
      id: 4,
      value: "25+",
      label: "5 Star Reviews",
      description: "Over 25 glowing testimonials from satisfied clients.",
    },
  ];

  const cardData = [
    {
      id: 1,
      image: "/card1.png",
      title: "Relocation Specialist",
      description:
        "Helping individuals and families move smoothly with expert area guidance.",
    },
    {
      id: 2,
      image: "/card2.png",
      title: "Buying Agent",
      description:
        "Personalized support to find the right home at the best value.",
    },
    {
      id: 3,
      image: "/card3.png",
      title: "Listing Agent",
      description:
        "Professional marketing and strategy to sell your home quickly and confidently.",
    },
    {
      id: 4,
      image: "/card4.png",
      title: "Real Estate Investment",
      description:
        "Guidance for profitable investment opportunities in the local market.",
    },
  ];
  return (
    <section className="lg:pt-20 pt-8 pb-5">
      <div className="container mx-auto">
        <div className="space-y-12">
          {/* About Hennen Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center lg:gap-10 gap-5">
            <div className="lg:col-span-2">
              <Image
                src="/lindy.png"
                alt="Lindy Hennen"
                width={1000}
                height={1000}
                className="w-full aspect-3/4 object-cover rounded-2xl bg-[#efedf0]/30 bg-blend-multiply"
              />
            </div>
            <div className="lg:col-span-3">
              <div className="lg:space-y-12 space-y-7">
                <div className="lg:space-y-5 space-y-2">
                  <h5 className="text-sm">About Me</h5>
                  <h2 className="lg:text-5xl text-2xl font-bold">
                    Lindy Hennen
                  </h2>
                  <p className="text-[#6C757D] lg:text-base text-sm">
                    Lindy Hennen is a dedicated and trusted real estate
                    professional known for her client-focused approach and deep
                    understanding of the local market. With a commitment to
                    transparency, clear communication, and personalized service,
                    she helps buyers and sellers navigate every step of their
                    real estate journey with confidence. Lindy brings a warm,
                    approachable style that makes the process smooth,
                    stress-free, and empowering for her clients. <br />
                    <br /> Whether guiding first-time buyers, assisting families
                    looking to upgrade, or helping homeowners get the best value
                    for their property, Lindy prioritizes results and
                    relationships. Her attention to detail, market expertise,
                    and strong negotiation skills ensure that every client
                    receives exceptional support and a successful experience
                    from start to finish.
                  </p>
                </div>
                <div className="grid grid-cols-2 lg:gap-y-12 gap-y-6 lg:gap-x-12 gap-x-3">
                  {stats.map((stat) => (
                    <div key={stat.id} className="lg:space-y-4 space-y-1">
                      <h3 className="lg:text-5xl text-2xl font-semibold">
                        {stat.value}
                      </h3>
                      <div className="text-[#6C757D] space-y-1">
                        <h2 className="lg:text-xl text-base">{stat.label}</h2>
                        <p className="lg:text-base text-sm">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cards Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-md shadow-[0px_4px_12px_1px_rgba(0,_0,_0,_0.1)] p-5 space-y-5 text-center"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={1000}
                  className="w-1/5 mx-auto aspect-square object-cover"
                />
                <div className="space-y-2">
                  <h3 className="lg:text-lg text-lg font-medium text-black!">
                    {card.title}
                  </h3>
                  <p className="text-[#6C757D] lg:text-base text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
