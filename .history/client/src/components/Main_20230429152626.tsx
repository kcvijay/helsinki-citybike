import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-hero bg-cover bg-center bg-fixed bg-no-repeat max-w-[100vw] min-h-[100vh]">
      <Outlet />
    </div>
  );
};

export default Main;
