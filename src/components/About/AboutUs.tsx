import React from 'react'
import wheel from '../../assets/about/wheel.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-secondary w-full dark:bg-dark pb-20">
      <div className="container pt-[6rem] md:pt-[8rem]">
        <div className="flex flex-col md:flex-row dark:text-dark"> 
        <div className="flex-1">
        <img src={wheel} alt="Car wheel" className='object-cover w-full h-full' />
        </div>
        <div className=" bg-primary text-[#e5e5e5] flex-1">
          <div className="pb-5 md:pb-10">
          <h1 className="font-medium text-2xl md:text-5xl text-center mt-10">ALL ABOUT CAR RENTAL AND THE CAR HUB</h1>
          <p className="text-center text-1xl px-0 md:px-2 pt-5 md:pt-10">we are your go-to destination for exceptional car rental services. Our extensive range includes recent models from various brands, all available at unbeatable prices. Whether you're exploring San Francisco or planning a more extended journey, our wide selection has you covered. Our friendly team at each location is dedicated to guiding you on how to venture out safely and stylishly. Your satisfaction and safety are our top priorities. Choose us for a rental experience that combines convenience, affordability, and style
          </p>
          </div>
          <div className="flex justify-center">
          <Link to="/booking" className='cursor-pointer text-[#111111] bg-secondary px-7 py-2 md:px-14 md:py-5 mb-10 lg:mb-20 hover:bg-[#111111] hover:text-secondary duration-300 hover:scale-105'>
            Get in Touch
          </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
