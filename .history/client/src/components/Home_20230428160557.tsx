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
          starting from <strong>May 2021</strong> to <strong>July 2021</strong>.
        </p>
        <div className="features">
          <p>Features</p>
          <div className="features-flex">
            <div className="hero-card">Real Journey Data</div>
            <div className="hero-card">Access to Every Stations</div>
          </div>
        </div>
      </section>
      <section className="hero-img">
        <img src={bikeImg} alt="A figure is riding a bike" />
      </section>
    </div>
  );
};

export default Home;
