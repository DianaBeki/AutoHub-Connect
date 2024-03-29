import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {  Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Cars from "./components/pages/Cars";
import About from "./components/pages/About";
import Booking from "./components/pages/Booking";
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import "aos/dist/aos.css";


const App = () => {

  //Dark Mode Feature
  const [theme, setTheme ] = React.useState(
  localStorage.getItem("theme")?
  localStorage.getItem("theme"):"light"
  );

  const element = document.documentElement;
  useEffect(() => {
  if(theme === "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }else {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  }, [theme]);

 // AOS Initialization
React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });
  AOS.refresh();
}, []);

  return (
    <main>
      <header> 
      <Navbar theme={theme} setTheme={setTheme} />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} /> 
  <Route path="/cars/:carId" element={<Cars />} />
  <Route path="/about" element={<About />} />
  <Route path="/booking" element={<Booking />} />
  </Routes>
  </header> 
  <ToastContainer />
  <Footer />
    </main>
  )
}

export default App
