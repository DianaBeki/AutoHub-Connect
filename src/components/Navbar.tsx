import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
const [nav, setNav] = useState(false);

   const links = [
    {
      id: 1,
      link: 'home',
      style: 'hover:border-b-2 hover:border-[#edf2f4] ',
    },
    {
      id: 2,
      link: 'cars',
      style: 'hover:border-b-2 hover:border-[#edf2f4] ',
    },
    {
      id: 3,
      link: 'about',
      style: 'hover:border-b-2 hover:border-[#edf2f4] ',
    },
    {
      id: 4,
      link: 'booking',
      style: 'hover:border-b-2 hover:border-[#edf2f4] ',
    },
   ];

   const handleNavClick = () => {
    setNav(!nav);
   }

  return (
    <div className="bg-[#000000] text-[#edf2f4] flex justify-between items-center px-[1rem] md:px-[7rem] w-full h-20 fixed">
      <div className="bg-[#fca311] inline">
        <h1 className="md:font-bold font-signature text-[2rem]">Car
       
          Hub</h1>
      </div>
      <ul className="hidden md:flex md:text-[16px] uppercase gap-[2rem] font-bold cursor-pointer">
        {links.map(({id, link, style}) => (
          <li key={id} className={`${style} hover:text-[#fca311] md:transition-transform md:transform md:hover:scale-110 md:duration-500`}>
       <Link to={link}>{link}</Link>
          </li> 
        )
        )}
      </ul>

      <button 
      type="button"
      onClick={handleNavClick}
      onKeyDown={handleNavClick}
      tabIndex={0}
      className="md:hidden cursor-pointer z-10"
      >
     {nav ? <FaTimes size={30} /> : <FaBars size={30}/> }
      </button>

      {nav && (
        <ul className="flex flex-col justify-center items-center gap-[2rem] uppercase font-signature cursor-pointer font-bold absolute top-0 left-0 w-full h-screen bg-[#fca311]">
          {links.map(({id, link }) => (
         <li 
         key={id} 
         onClick={handleNavClick}
         onKeyDown={handleNavClick}
         tabIndex={0}
         className="cursor-pointer px-10 py-3 text-2xl">
           <Link to={link}
           onClick={handleNavClick}
           className="bg-[#fdf0d5] px-10 py-3 inline text-black"
           >{link}</Link>
         </li>
          )

          )}   
        </ul>
      )}
    </div>
  );
}

export default Navbar
