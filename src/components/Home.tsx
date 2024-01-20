import React from 'react';
import { GiAutoRepair } from "react-icons/gi";

const Home = () => {
  return (
    <div className="dark:bg-dark dark:text-secondary duration-300">
      <div className="bg-home"> 
      <div className=" pt-[8rem] lg:pt-[2rem] flex flex-col justify-center items-center md:gap-2 lg:translate-y-[10rem]">
        <div className="border-4 border-secondary rounded-full p-4 md:p-7">
        <GiAutoRepair size={85} className="text-secondary" />
        </div>
        <div className="mt-5">
        <h1 className="md:font-bold font-signature text-[2.2rem] text-secondary">
            CAR & HUB
          </h1>
        </div>
        <div className="bg-primary inline p-1">
          <h3 className="text-1xl font-bold">Retro Auto Specialist</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
