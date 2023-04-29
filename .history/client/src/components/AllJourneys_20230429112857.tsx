import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AllJourney.css";
import TableRow from "./TableRow";

const AllJourneys = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys?limit=20")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">All Journeys</h2>
      <div className="bg-white p-2 rounded-md">
        <table className="mx-auto w-full transition-all duration-300">
          <thead className="border border-collapse bg-slate-500 text-white ">
            <tr>
              <th>Departure Station</th>
              <th>Departure Station ID</th>
              <th>Departure Time</th>
              <th>Return Station</th>
              <th>Return Station ID</th>
              <th>Return Time</th>
              <th>Distance</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return <TableRow key={el.id} dep_station />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJourneys;
