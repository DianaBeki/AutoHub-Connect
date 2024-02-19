import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../../redux/car/carSlice';


const CarsDetail = () => {
  const car = useSelector(state => state.car)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchCars())
  }, [])

  return (
    <div className="bg-secondary text cursor-pointer w-full dark:bg-dark pb-[5rem]">
         <div className="container pt-[6rem] md:pt-[8rem]">
      <div className="">
        <h1>List of cars</h1>
        {car.loading && <div>Loading...</div>}
        {!car.loading && car.error ? <div>Error: {car.error}</div> : null}
        {!car.loading && car.cars.length ? (
          <ul>
            {car.cars.map((car) => (
              <li key={car.id}>{car.name}</li>
            ))}
          </ul>
        ) :null}
        </div>   
                <Link to="/booking" className='underline'>Book Now</Link>   
                </div>  
    </div>
  );
};

export default CarsDetail;
