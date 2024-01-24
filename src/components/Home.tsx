import React from 'react';
import { GiAutoRepair } from "react-icons/gi";

const Home = () => {
  return (
    <div className="bg-home dark:bg-dark dark:text-secondary duration-300">
      <div className="container pt-[8rem] lg:pt-[2rem] flex flex-col justify-center items-center md:gap-2 lg:translate-y-[10rem] cursor-pointer">
        <div data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="600" className="border-4 border-secondary rounded-full p-4 md:p-7">
        <GiAutoRepair size={85} className="text-secondary" />
        </div>
        <div className="mt-5">
        <h1  
        data-aos="fade-up"
        data-aos-delay="600"
        className="md:font-bold font-signature text-[2.2rem] text-secondary">
            AUTO & HUB
          </h1>
        </div>
        <div 
         data-aos="fade-up"
         data-aos-delay="1000"
        className="bg-primary inline p-1">
          <h3 className="text-2xl font-bold">ProDrive Hub&Rentals</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
