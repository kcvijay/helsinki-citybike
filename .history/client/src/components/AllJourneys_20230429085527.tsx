import React, { useEffect, useState } from "react";
import axios from "axios";

const AllJourneys = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys")
      .then((res) => setData(res.data));
  }, []);

  console.log(data.slice(1, 100));
  return <div className="wrapper">AllJourneys</div>;
};

export default AllJourneys;
