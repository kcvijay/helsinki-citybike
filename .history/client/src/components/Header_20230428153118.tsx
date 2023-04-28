import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Helsinki City Bike</Link>
      </h1>
    </header>
  );
};

export default Header;
