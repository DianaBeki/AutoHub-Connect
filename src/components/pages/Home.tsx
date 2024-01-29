import React from 'react'
import HomeImg from '../Home/Home'
import OurServices from '../Services/OurServices'
import ChooseUs from '../Services/ChooseUs'
import CarsDetail from '../Cars/CarsDetail'
import Testimonials from '../Cars/Testimonials'
import AboutUs from '../About/AboutUs'
import BookingImage from '../Booking/BookingImage'
import BookingForm from '../Booking/BookingForm'

const Home = () => {
  return (
    <div>
     <HomeImg />
     <OurServices />
     <ChooseUs />
     <CarsDetail />
     <Testimonials />
     <AboutUs />
     <BookingImage />
     <BookingForm />
    </div>
  )
}

export default Home
