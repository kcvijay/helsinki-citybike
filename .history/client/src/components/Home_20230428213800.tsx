import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios.get("http://localhost:4000/api/journeys/");
  });
  return <div>Home</div>;
};

export default Home;
