import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys/644be82e77237ca58fac4f83")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  return <div>Home</div>;
};

export default Home;
