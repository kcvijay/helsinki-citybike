import React from "react";
import bikeImg from "../assets/bike.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="hero">
      <section className="hero-text">
        <p className="hero-text__header">Helsinki City Bikes Journeys</p>
        <p className="hero-text__details">
          This application shows the journey data of Helsinki City Bikes
          starting from May 2021 to July 2021.
        </p>
      </section>
      <section className="hero-img">
        <img src={bikeImg} alt="A figure is riding a bike" />
      </section>
    </div>
  );
};

export default Home;
