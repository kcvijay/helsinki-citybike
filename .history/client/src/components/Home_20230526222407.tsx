import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper grid grid-4fr-2fr h-[350px]">
      <div className="text-white backdrop-blur-[5px]">
        <h2 className="text-[32px] font-bold mb-8">
          Helsinki City Bike Journey Data
        </h2>
        <p className="text-xl leading-10 mb-8">
          This application provides the journey data for Helsinki City bikes
          starting from May 2021 to July 2021.
        </p>
        <Link className="btn-primary" to="/all-journeys">
          Browse all journeys
        </Link>
      </div>
      <div className="w-full h-full bg-cycle bg-center bg-no-repeat object-contain"></div>
    </div>
  );
};

export default Home;