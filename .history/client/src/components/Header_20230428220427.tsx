import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-500">
      <Link to="/" className="block text-3xl font-bold">
        Helsinki City Bike
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">All Journeys</NavLink>
        </li>
        <li>
          <NavLink to="/">All Stations</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
