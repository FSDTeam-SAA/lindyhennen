import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const ContactOfficeInformation = () => {
    const valuesData = [
  {
    name:'Email',
    title: "Our friendly team is here to help.",
    description:
      "lindy@centralmnrealty.com",
    icon: Mail,
  },
  {
    name:'Address',
    title: "Come say hello at our office HQ.",
    description:
      "80 37th Ave S, Saint cloud,MN 56301",
    icon: MapPin,
  },
  {
    name:'Phone',
    title: "Mon-Fri from 8am to 5pm.",
    description:
      "320-250-1317",
    icon: Phone,
  },
  
];
  return (
    <section className='my-16 md:my-20'>
      <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-8">
          {valuesData.map((item, index) => (
            <div
              key={index}
              className=" p-8  text-center space-y-2"
            >
              <div className="bg-[#EECFEA] inline-block p-4 rounded-full">
                <item.icon className="w-6 h-6 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-normal leading-[150%] text-primary mb-3">
                {item.name}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {item.title}
              </p>
              <p className="text-[##212121] text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactOfficeInformation