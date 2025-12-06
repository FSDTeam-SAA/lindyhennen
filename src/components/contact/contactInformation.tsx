import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactOfficeInformation = () => {
  const valuesData = [
    {
      name: "Email",
      title: "I am always here to help.",
      description: "lindy@centralmnrealty.com",
      icon: Mail,
      href: "mailto:lindy@centralmnrealty.com",
    },
    {
      name: "Address",
      title: "Come say hello at my office HQ.",
      description: "80 37th Ave S #200, St Cloud, MN 56301, USA",
      icon: MapPin,
      href: "https://maps.app.goo.gl/SX6qrDJdMS9AKUXN6",
    },
    {
      name: "Phone",
      title: "Sat-Fri from 9am to 5pm.",
      description: "+13202501317",
      icon: Phone,
      href: "tel:13202501317",
    },
  ];
  return (
    <section className="my-16 md:my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-8">
          {valuesData.map((item, index) => (
            <div key={index} className=" p-8  text-center space-y-2">
              <div className="bg-[#EECFEA] inline-block p-4 rounded-full">
                <item.icon className="w-6 h-6 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-normal leading-[150%] text-primary mb-3">
                {item.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.title}</p>
              <a
                href={item.href}
                target="_blank"
                className="text-[##212121] text-base md:text-lg leading-relaxed"
              >
                {item.description}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOfficeInformation;
