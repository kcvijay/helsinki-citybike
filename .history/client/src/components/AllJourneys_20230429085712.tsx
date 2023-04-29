import React, { useEffect, useState } from "react";
import axios from "axios";

const AllJourneys = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys/644be82e77237ca58fac4f84")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  return <div className="wrapper">AllJourneys</div>;
};

export default AllJourneys;
