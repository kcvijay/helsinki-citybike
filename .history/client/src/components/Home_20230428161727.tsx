import React from "react";
import { Link } from "react-router-dom";
import bikeImg from "../assets/bike.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="hero">
      <section className="hero-text">
        <p className="hero-text__header">Helsinki City Bikes Journeys</p>
        <p className="hero-text__details">
          This application shows the journey data of Helsinki City Bikes
          starting from <strong>May 2021</strong> to <strong>July 2021</strong>.
          <br />
          You can access to all the real time journey data as well as all the
          stations in Helsinki city bike operational area.
        </p>

        <div>
          <Link className="primary-btn" to="/all-journeys">
            Browse all journeys
          </Link>
        </div>
      </section>
      <section className="hero-img">
        <img src={bikeImg} alt="A figure is riding a bike" />
      </section>
    </div>
  );
};

export default Home;
