import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-hero bg-cover sticky bg-center bg-no-repeat max-w-[100vw] min-h-[100vh]">
      <Outlet />
    </div>
  );
};

export default Main;
