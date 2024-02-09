import React from 'react';
import { GiAutoRepair } from "react-icons/gi";

const HomeImg = () => {
  return (
    <div className="bg-home pb-20 text-secondary duration-300">
      <div className="flex flex-col items-center justify-center container pt-[6rem] md:pt-[8rem] cursor-pointer">
        <div className="">
        <GiAutoRepair size={150} className="text-secondary border-4 border-secondary rounded-full p-5 mx-auto" />
        </div>
        <div className="mt-10">
        <h1  
        className="text-center text-2xl md:text-5xl text-secondary leading-[45px] md:leading-[62px]">
            CAR RENTAL AND THE <br />
             CAR HUB WELCOMES <br />
              YOU
          </h1>
        </div>
        <div 
        className="text-center mt-3">
          <h3 className="bg-[#355834] inline p-1 text-2xl py-3 px-5">Life on Wheels</h3>
        </div>
      </div>
    </div>
  )
}

export default HomeImg
