import React, { useEffect, useState } from "react";
import axios from "axios";

const AllJourneys = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys?limit=10")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-6">All Journeys</h2>
    </div>
  );
};

export default AllJourneys;
