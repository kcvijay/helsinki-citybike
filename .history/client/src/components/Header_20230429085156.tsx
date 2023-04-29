import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header className="bg-orange-400 flex justify-between items-center p-6 md:p-0 transition-all duration-300">
        <Link to="/" className="block text-2xl md:pl-6 font-bold text-white">
          Helsinki City Bike
        </Link>
        <ul className="hidden md:inline-flex md">
          <li>
            <NavLink
              className="inline-block w-[160px] md:w-[130] p-8 hover:bg-orange-300 text-center transition-all duration-300"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-[160px] md:w-[130]  p-8 hover:bg-orange-300 text-center  transition-all duration-300"
              to="/all-journeys"
            >
              All Journeys
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-[160px] md:w-[130]  p-8 hover:bg-orange-300 text-center  transition-all duration-300"
              to="/all-stations"
            >
              All Stations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-[160px] md:w-[130]  p-8 hover:bg-orange-300 text-center  transition-all duration-300"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
        <div
          className="material-icons text-[36px] text-white md:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? "close" : "menu"}
        </div>
      </header>
      {showNav && (
        <ul className="md:hidden absolute bg-[rgba(0,0,0,0.9)] top-[84px] left-0 min-h-[100vh] min-w-[100vw] z-[999] text-center text-white transition-all duration-300">
          <li>
            <NavLink
              className="inline-block w-full p-9 hover:bg-orange-300 hover:text-black transition-all duration-300"
              to="/"
              onClick={() => setShowNav(!showNav)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-full p-9 hover:bg-orange-300 hover:text-black transition-all duration-300"
              to="/all-journeys"
              onClick={() => setShowNav(!showNav)}
            >
              All Journeys
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-full p-9 hover:bg-orange-300 hover:text-black transition-all duration-300"
              to="/all-stations"
              onClick={() => setShowNav(!showNav)}
            >
              All Stations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-full p-9 hover:bg-orange-300 hover:text-black transition-all duration-300"
              to="/about"
              onClick={() => setShowNav(!showNav)}
            >
              About
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
