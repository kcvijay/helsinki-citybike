import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-500">
      <Link to="/" className="block text-3xl font-bold">
        Helsinki City Bike
      </Link>{" "}
    </header>
  );
};

export default Header;
