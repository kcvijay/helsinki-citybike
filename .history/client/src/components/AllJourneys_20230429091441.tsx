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
  return <div className="wrapper">AllJourneys</div>;
};

export default AllJourneys;
