import React from 'react';
import { GiAutoRepair } from "react-icons/gi";

const HomeImg = () => {
  return (
    <div className="bg-home dark:bg-dark dark:text-secondary duration-300">
      <div className="container pt-[6rem] md:pt-[8rem] cursor-pointer">
        <div data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="600" className="">
        <GiAutoRepair  className="text-[10rem] text-secondary border-4 border-secondary rounded-full p-6 mx-auto" />
        </div>
        <div className="mt-10">
        <h1  
        data-aos="fade-up"
        data-aos-delay="600"
        className="md:font-bold text-center font-signature text-[2.4rem] text-secondary">
            AUTO & HUB
          </h1>
        </div>
        <div 
         data-aos="fade-up"
         data-aos-delay="1000"
        className="text-center">
          <h3 className="bg-primary inline p-1 text-2xl font-bold">Car Rental & Car Hub</h3>
        </div>
      </div>
    </div>
  )
}

export default HomeImg
