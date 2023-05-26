import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper md:grid grid-4fr-2fr h-[50vh]">
      <div className="bg-slate-100 p-[32px]">
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
      <div className="hidden md:block  bg-cycle bg-left bg-no-repeat object-cover"></div>
    </div>
  );
};

export default Home;
