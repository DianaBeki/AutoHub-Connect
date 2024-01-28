import React from 'react';
import { GiAutoRepair } from "react-icons/gi";
import icon from '../../assets/home/icon.png';

const HomeImg = () => {
  return (
    <div className="bg-home dark:bg-dark dark:text-secondary duration-300">
      <div className="flex flex-col items-center justify-center container pt-[6rem] md:pt-[8rem] cursor-pointer">
        <div className="">
        <GiAutoRepair size={150} className="text-secondary border-4 border-secondary rounded-full p-5 mx-auto" />
        </div>
        <div className="mt-10">
        <h1  
        className="text-center text-2xl md:text-5xl tracking tight text-secondary">
            CAR RENTAL AND THE <br />
             CAR HUB WELCOMES <br />
              YOU
          </h1>
        </div>
        <div 
        className="text-center mt-3">
          <h3 className="bg-primary inline p-1 text-2xl">Life on Wheels</h3>
        </div>
      </div>
    </div>
  )
}

export default HomeImg
