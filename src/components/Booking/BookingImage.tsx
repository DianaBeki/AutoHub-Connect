import React from 'react';
import {toast } from 'react-toastify';
import alignedCars from '../../assets/booking/alignedcars.jpg';

const BookingForm = () => {
  return (
    <div className="bg-secondary w-full dark:bg-dark pb-[5rem]">
      <div className="container pt-[6rem] md:pt-[8rem]">
<div className="border-2 dark:border-dark">
  <img src={alignedCars} alt="" className="object-cover mx-auto w-full h-56" />
</div>
      </div>
    </div>
  )
}

export default BookingForm
