import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="max-w-[1248px] mx-auto">
      <Outlet />
    </div>
  );
};

export default Main;
