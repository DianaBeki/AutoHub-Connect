import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { FaCar } from "react-icons/fa";

const links = [
  {
    id: 1,
    link: 'services',
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
    id: 5,
    link: 'booking',
    style: 'hover:border-b-2 hover:border-[#edf2f4] ',
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="">
      <div className="bg-secondary dark:bg-[#111111] dark:text-secondary duration-300 flex  shadow-md justify-between md:justify-around items-center w-full h-20 fixed p-[1rem] md:p-0">
        <Link to='/'>
        <div className="bg-primary">
          <h1 className="md:font-bold flex font-signature text-2xl text-secondary">
            Auto
            <FaCar size={50} className="rotate-[-5deg]" />
            Hub
          </h1>
        </div>
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center md:text-[16px] uppercase gap-8 font-bold cursor-pointer">
            {links.map(({ id, link, style }) => (
              <li
                key={id}
                className={`${style} hover:text-primary md:transition-transform md:transform md:hover:scale-110 md:duration-500`}
              >
                <Link to={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {theme === 'dark' ? (
            <BiSolidSun onClick={() => setTheme('light')} size={30} />
          ) : (
            <BiSolidMoon onClick={() => setTheme('dark')} size={30} />
          )}
        </div>

        <button
          type="button"
          onClick={handleNavClick}
          onKeyDown={handleNavClick}
          tabIndex={0}
          className="md:hidden cursor-pointer z-10"
        >
          {nav ?  <FaTimes size={30} />  : <HiMenuAlt3 size={35} />}
        </button>

        {nav && (
          <ul className="flex flex-col justify-center items-center gap-[2rem] uppercase font-signature cursor-pointer font-bold absolute top-0 left-0 w-full h-screen bg-primary">
            {links.map(({ id, link }) => (
              <li
                key={id}
                onClick={handleNavClick}
                onKeyDown={handleNavClick}
                tabIndex={0}
                className="cursor-pointer px-10 py-3 text-2xl"
              >
                <Link
                  to={link}
                  onClick={handleNavClick}
                  className="bg-[#fdf0d5] px-10 py-3 inline text-black"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

