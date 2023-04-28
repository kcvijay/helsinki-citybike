import React from "react";
import bikeImg from "../assets/bike.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="hero">
      <section className="hero-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima
        aut dolor sed repellat facilis ullam cum tempora architecto quod! Alias,
        itaque tempora voluptatum similique quaerat doloremque pariatur quis
        blanditiis architecto accusamus nostrum incidunt fuga labore quo
        suscipit nihil ea eius consequatur? Eaque, labore reprehenderit hic non
        molestiae unde eum praesentium placeat laborum voluptates illum sint
        animi alias quae doloribus reiciendis eos porro veniam voluptatum
        necessitatibus sequi assumenda qui. Ducimus quibusdam minus officiis ut
        illo quam autem numquam nemo quo necessitatibus, culpa delectus
        recusandae omnis at unde hic. Vitae cum maiores reprehenderit animi
        deserunt earum sapiente atque excepturi ullam nesciunt.
      </section>
      <section className="hero-img">
        <img src={bikeImg} alt="A figure is riding a bike" />
      </section>
    </div>
  );
};

export default Home;
