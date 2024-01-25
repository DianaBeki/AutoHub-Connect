import React from 'react';
import { GiMechanicGarage } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";

const OurServices = () => {
  return (
    <>
    <div className="bg-secondary cursor-pointer w-full dark:bg-dark pb-[5rem]">
      <div className="container pt-[6rem] md:pt-[8rem]">
     <div className="text-center font-medium pb-10">
      <h1 className="text-dark dark:text-secondary text-[20px] md:text-[29px] border-b-2 md:border-b-4 border-dark dark:border-secondary inline pb-2">SERVICES</h1>
     </div>
     <div className="text-dark dark:text-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="">
   <div className="">
    <GiMechanicGarage size={100} className="mx-auto p-4 rounded-full  border-4 border-dark dark:border-primary" />
   </div>
   <h1 className="text-center mt-4 mb-[15px] font-medium md:font-bold">MAINTENANCE</h1>
   <p className="text-center text-1xl text-[#111111] dark:text-primary">Our skilled team offers a range of services, from routine inspections to efficient repairs, ensuring your vehicle stays in top condition. Experience transparent and reliable automotive care with us, providing you with confidence on the road</p>
        </div>
        <div className="">
          <div className="">
          <FaGear size={100} className="mx-auto p-4 rounded-full  border-4 border-dark dark:border-primary" />
          </div>
          <h1 className="text-center mt-4 mb-[15px] font-medium md:font-bold">DRIVEHUB</h1>
          <p className="text-center text-1xl text-[#111111] dark:text-primary">Our adept team caters to an array of services, from routine inspections to swift repairs, assuring your vehicle remains in peak condition. Encounter transparent and dependable automotive care with us, instilling confidence as you navigate the roads ahead</p>
        </div>
        <div className="">
<div className="">
<GiEmptyMetalBucketHandle size={100} className="mx-auto p-4 rounded-full  border-4 border-dark dark:border-primary"/>
</div>
<h1 className="text-center mt-4 mb-[15px] font-medium md:font-bold">PAINTWORK</h1>
<p className="text-center text-1xl text-[#111111] dark:text-primary">Whether you're looking to refresh your vehicle's appearance or add a personalized touch, our paintwork services bring creativity to every curve. Elevate your ride with a spectrum of colors and designs, turning your vehicle into a canvas of individuality
</p>
        </div>
      </div>
     </div>
      </div>
    </div>
    </>
  )
}

export default OurServices
