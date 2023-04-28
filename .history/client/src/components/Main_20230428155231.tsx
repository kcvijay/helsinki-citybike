import React from "react";
import { Outlet } from "react-router-dom";
import "../Styles/Main.css";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Outlet />
    </div>
  );
};

export default Main;
