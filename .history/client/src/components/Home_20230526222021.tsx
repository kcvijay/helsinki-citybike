import React from "react";
import { Link } from "react-router-dom";
import cycleImg from "../assets/helsinki-bikestation.webp";

const Home = () => {
  return (
    <div className="wrapper grid grid-4fr-2fr">
      <div className="text-white blur-[5px]">
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
      <div>
        <img
          src={cycleImg}
          alt="Bicycle station in a streetside in Helsinki center."
        />
      </div>
    </div>
  );
};

export default Home;
