import React from 'react';
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#001219] w-full dark:bg-[#111111] h-25">
      <div className="container py-5">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="">
          <div className="mb-3">
          <h1 className="flex font-signature text-1xl md:text-2xl text-secondary">
            Auto <FaCar  size={40} className='text-secondary' /> Hub
          </h1>
        </div>
        <div className="flex gap-3 text-[#e5e5e5]">
          <Link to="#">
            <CiLinkedin size={30} />
          </Link>
         <Link to="#">
         <CiFacebook size={30} />
         </Link>
  <Link to="#">
  <CiInstagram size={30} />
  </Link>
        </div>
          </div>

          <div className="text-secondary">
            <div className="font-bold">
              <h1 className="mb-3">Important Links</h1>
            </div>
            <ul className="flex flex-col gap-1 md:gap-3">
              <li className='hover:text-primary duration-500'><Link to="services">Services</Link></li>
              <li className='hover:text-primary duration-500'><Link to="cars">Cars</Link></li>
              <li className='hover:text-primary duration-500'><Link to="about">About</Link></li>
              <li className='hover:text-primary duration-500'><Link to="booking">Booking</Link></li>
            </ul>
          </div>

          <div className="text-secondary">
   <div className="font-bold">
    <h1 className='mb-3'>Contact Us</h1>
   </div>
   <ul className='flex flex-col gap-1 md:gap-3'>
   <li>500 Terry Francine Street <br />
   San Francisco, CA 94158</li>
    <li>Tel: 9112345678</li>
    <li>info@mysite.com</li>
   </ul>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
