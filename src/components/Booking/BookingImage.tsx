import React from 'react';
import alignedCars from '../../assets/booking/alignedcars.jpg';

const BookingImage = () => {
  return (
    <div className="bg-secondary w-full dark:bg-dark">
      <div className="container pt-[6rem] md:pt-[8rem]">
<div className="">
  <img src={alignedCars} alt="" className="object-cover mx-auto w-full h-56" />
</div>
      </div>
    </div>
  )
}

export default BookingImage
