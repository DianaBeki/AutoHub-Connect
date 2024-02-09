import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-[#e5e5e5] dark:text-secondary  w-full dark:bg-dark pb-20">
    <div className="container pt-[2rem] md:pt-[4rem]">
      <div className="text-center">
        <h1 className="font-medium pb-[1rem] text-[20px] md:text-[29px]">What Our Clients Say About Us</h1>
        <p className="pb-[2rem] md:pb-[5rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ducimu</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 place-content-center">
        <div className="">
        <div className="mb-4">
  <FaQuoteLeft size={25} className="mx-auto"  />
</div>
<div className="">
<p className="mb-4 text-center">AutoHub Connect made my car rental experience a breeze! The process was super easy, and the cars were in great condition. I can always count on them for a smooth and reliable ride. Thanks, AutoHub Connect, for making my journeys stress free! - Happy Driver <div className="text-center font-bold mt-2">
<cite>Jessie Pink</cite>
</div></p>
</div>

        </div>

        <div className="">
        <div className="mb-4">
  <FaQuoteLeft size={25} className='mx-auto' />
</div>
<div className="">
<p className='mb-4 text-center'>AutoHub Connect is my go-to for car rentals. The booking is quick, and their cars are always clean and well-maintained. It's a hassle-free experience every time. Thanks, AutoHub Connect, for your excellent service! - Happy client<div className="font-bold text-center mt-2">
<cite>Caster Johnson</cite>
</div></p>
</div>
        </div>

        <div className="">
        <div className="mb-4">
  <FaQuoteLeft size={25} className='mx-auto' />
</div>
<div className="">
<p className="mb-4 text-center">I had a fantastic experience with AutoHub Connect. Renting a car was a seamless process, and their team was friendly and professional. The vehicles are in top-notch condition, providing a reliable and comfortable ride<div className="font-bold text-center mt-2">
<cite>Skyler Adelson</cite>
</div></p>
</div>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default Testimonials
