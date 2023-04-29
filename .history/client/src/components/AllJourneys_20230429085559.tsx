import React, { useEffect, useState } from "react";
import axios from "axios";

const AllJourneys = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys")
      .then((res) => setData(res.data.slice(0, 20)));
  }, []);

  console.log(data);
  return <div className="wrapper">AllJourneys</div>;
};

export default AllJourneys;
