import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper md:grid grid-4fr-2fr min-h-[50vh]">
      <div className="bg-slate-100 p-[32px]">
        <h2 className="text-[32px] font-bold mb-8">
          CityBike Finland Journey and Stations
        </h2>
        <p className="mb-4">
          <span className="bg-teal-500 p-3 mr-4 text-white rounded-md">
            Helsinki
          </span>
          <span>Espoo</span>
        </p>
        <p className="text-xl leading-10 mb-8">
          This application provides the journey and bicycle station data for
          Helsinki city bikes starting from May 2021 to July 2021.
        </p>
        <Link className="btn-primary" to="/all-journeys">
          Browse all journeys
        </Link>
      </div>
      <div className="hidden md:block bg-cycle max-w-full max-h-full bg-cover bg-right"></div>
    </div>
  );
};

export default Home;
