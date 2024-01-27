import React from 'react'
import bugatti from '../../assets/cars/bugatti.png';
import jeep from '../../assets/cars/jeep.png';
import tesla from '../../assets/cars/tesla.png';
import { Link } from 'react-router-dom';

const CarsDetail = () => {
  return (
    <div className="bg-secondary text cursor-pointer w-full dark:bg-dark pb-[5rem]">
      <div className="container pt-[6rem] md:pt-[8rem]">
      <div className="dark:text-secondary text-center">
        <h1 className='leading-10 text-[20px] md:text-[29px] font-medium pb-5'>VEHICLES</h1>
        <h3 className='text-[1.1rem] mb-5'>Top Rentals</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
<div className="w-full rounded-md border-2 dark:border-secondary shadow-md dark:shadow-secondary">
  <div className="">
  <span className='dark:text-secondary ml-2 font-bold'>12Km</span>
  <img src={bugatti} alt="Bugatti car" className="w-40 mt-4 mx-auto" />
  </div>
  <h4 className="ml-2 mb-4 text-primary font-bold">BUGATTI UX</h4>
  <div className="dark:text-secondary flex justify-between mx-2 font-bold">
  <span>$200/Day</span>
  <Link to="/booking" className='underline'>Book Now</Link>
  </div>
  <span></span>

</div>

<div className="w-full rounded-md border-2 dark:border-secondary shadow-md dark:shadow-secondary">
  <div className="">
   <span className='dark:text-secondary ml-2 font-bold'>12Km</span>
  <img src={jeep} alt="Jeep car" className="w-40 mx-auto"  />
  </div>
  <h4 className="ml-2 text-primary font-bold">JEEP UX</h4>
  <div className="dark:text-secondary flex justify-between mx-2 mb-2 font-bold">
  <span>$100/Day</span>
  <Link to="/booking" className='underline'>Book Now</Link>
  </div>
  
</div>

<div className="w-full border-2 dark:border-secondary rounded-md shadow-md dark:shadow-secondary">
  <div className="">
  <span className='dark:text-secondary ml-2 font-bold'>12Km</span>
  <img src={tesla} alt="Tesla car" className="w-40 mx-auto" />
  </div>
  <h4 className="ml-2 mb-7 text-primary font-bold">TESLA UX</h4>
  <div className="dark:text-secondary flex justify-between mx-2 font-bold">
  <span>$200/Day</span>
  <Link to="booking" className='underline'>Book Now</Link>
  </div>
  <span></span>
  </div>
</div>

      </div>
      </div>
  )
}

export default CarsDetail
