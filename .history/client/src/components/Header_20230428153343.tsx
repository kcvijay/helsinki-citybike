import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Helsinki City Bike</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/all-stations">All Stations</NavLink>
        </li>
        <li>
          <NavLink to=""></NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
