import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="hidden md:flex bg-orange-400 justify-between items-center">
        <Link to="/" className="block text-3xl font-bold pl-8 text-white">
          Helsinki City Bike
        </Link>
        <ul className="inline-flex">
          <li>
            <NavLink
              className="inline-block w-[160px] p-8 hover:bg-orange-300 text-center transition-all duration-300"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-[160px]  p-8 hover:bg-orange-300 text-center  transition-all duration-300"
              to="/all-journeys"
            >
              All Journeys
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-[160px]  p-8 hover:bg-orange-300 text-center  transition-all duration-300"
              to="/all-stations"
            >
              All Stations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="inline-block w-[160px]  p-8 hover:bg-orange-300 text-center  transition-all duration-300"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
