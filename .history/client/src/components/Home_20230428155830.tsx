import React from "react";
import bikeImg from "../assets/bike.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="hero">
      <section className="hero-text">
        <p className="hero-text__header">Helsinki City Bikes Journeys</p>
      </section>
      <section className="hero-img">
        <img src={bikeImg} alt="A figure is riding a bike" />
      </section>
    </div>
  );
};

export default Home;
