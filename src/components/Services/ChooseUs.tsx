import React, { useState } from 'react';
import { FaAddressBook, FaCameraRetro } from "react-icons/fa";
import {  FaPenToSquare } from "react-icons/fa6";

const ChooseUs = () => {
  const [showMoreInfo, setShowMoreInfo] = useState([false, false, false]);

  const serviceData = [
    {
      icon: <FaCameraRetro size={50} className="mx-auto" />,
      title: "Best Price",
      description: "At AutoHub Connect, we are dedicated to delivering exceptional value for your automotive needs. Our competitive and transparent pricing ensures you get the best rates without compromising service quality. Trust us for unbeatable prices and outstanding service excellence, making your journey both memorable and cost-effective. Choose affordability without sacrificing excellence."
    },
    {
      icon: <FaAddressBook size={50} className="mx-auto" />,
      title: "Fast and Safe",
      description: "We prioritize efficiency without compromising your safety. Our commitment to providing swift and secure experiences is reflected in streamlined processes and rigorous safety measures. Whether renting a car or using our services, expect a seamless, fast, and secure experience putting your safety first. Choose us for a journey where speed meets safety, ensuring a hassle-free and protected automotive adventure."
    },
    {
      icon: <FaPenToSquare size={50} className="mx-auto" />,
      title: "Experienced Driver",
      description: "We focus on making your rides enjoyable and stress-free. Our skilled drivers are committed to a smooth and safe journey, ensuring you reach your destination comfortably. Rely on our friendly and professional service. Just like our commitment to unbeatable prices and excellent service quality, we strive to make your experience with our drivers memorable and cost-effective. Trust Experience Driver for a ride that's both affordable and exceptional."
    }
  ];

  return (
    <div className="bg-[#e5e5e5] text cursor-pointer w-full dark:bg-dark pb-10">
      <div className="container pt-[2rem] md:pt-[4rem]">
        <div className="font-medium pb-10 text-center">
          <h1 className="text-[20px] md:text-[29px] dark:text-secondary">Why Choose Us</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-5 dark:text-secondary">
          {serviceData.map((service, index) => (
            <div key={index} className="bg-[#111111] text-secondary hover:text-dark hover:bg-primary cursor-pointer duration-200 rounded-md px-2 md:px-5 py-3">
              <div className="mt-4">{service.icon}</div>
              <div className="">
                <h1 className="text-center mt-4 mb-[15px] font-medium">{service.title}</h1>
                <p className="text-1xl">
                  {showMoreInfo[index] ? service.description : `${service.description.slice(0, 250)}...`}
                  <br />
                  <span
                    className="text-[#fb5607] font-medium cursor-pointer"
                    onClick={() => {
                      const updatedInfo = [...showMoreInfo];
                      updatedInfo[index] = !updatedInfo[index];
                      setShowMoreInfo(updatedInfo);
                    }}
                  >
                    {showMoreInfo[index] ? "Show Less" : "Learn More"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
