import React from 'react';
import bugatti from '../../assets/cars/bugatti.png';
import jeep from '../../assets/cars/jeep.png';
import tesla from '../../assets/cars/tesla.png';
import { Link } from 'react-router-dom';

const carDetails = [
  {
    id: 1,
    kilometre: '12Km',
    src: bugatti,
    model: 'BUGATTI UX',
    price: '$200/Day',
    style: 'lg:pt-7',
  },
  {
    id: 2,
    kilometre: '12Km',
    src: jeep,
    model: 'JEEP UX',
    price: '$100/Day',
    style: 'lg:mx-2 lg:pb-2',
  },
  {
    id: 3,
    kilometre: '12Km',
    src: tesla,
    model: 'TESLA UX',
    price: '$200/Day',
    style: 'lg:pt-7',
  },
];

const CarsDetail = () => {
  return (
    <div className="bg-secondary text cursor-pointer w-full dark:bg-dark pb-[5rem]">
      <div className="container pt-[6rem] md:pt-[8rem]">
        <div className="dark:text-secondary text-center">
          <h1 className='leading-10 text-[20px] md:text-[29px] font-medium pb-5'>VEHICLES</h1>
          <h3 className='text-[1.1rem] mb-5'>Top Rentals</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
          {carDetails.map(({ id, kilometre, src, model, price, style }) => (
            <div key={id} className={`${style} w-full rounded-md border-2 dark:border-secondary shadow-md dark:shadow-secondary`}>
              <div className="">
                <span className='dark:text-secondary ml-2 font-bold'>{kilometre}</span>
                <img src={src} alt={`${model} car`} className="w-40 mt-4 mx-auto" />
              </div>
              <h4 className="ml-2 mb-4 text-primary font-bold">{model}</h4>
              <div className="dark:text-secondary flex justify-between mx-2 font-bold">
                <span>{price}</span>
                <Link to="/booking" className='underline'>Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsDetail;
