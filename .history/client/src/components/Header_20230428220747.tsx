import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-500 flex justify-between items-center">
      <Link to="/" className="block text-3xl font-bold pl-8 text-white">
        Helsinki City Bike
      </Link>
      <ul className="inline-flex">
        <li className="inline-block w-[160px] p-8 hover:bg-teal-300 transition-all duration-300">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="inline-block w-[160px]  p-8 hover:bg-teal-300 transition-all duration-300">
          <NavLink to="/">All Journeys</NavLink>
        </li>
        <li className="inline-block w-[160px]  p-8 hover:bg-teal-300 transition-all duration-300">
          <NavLink to="/">All Stations</NavLink>
        </li>
        <li className="inline-block w-[160px]  p-8 hover:bg-teal-300 transition-all duration-300">
          <NavLink to="/">About</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
