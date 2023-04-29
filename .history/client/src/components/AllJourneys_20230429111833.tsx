import React from "react";
import axios from "axios";
import "../styles/AllJourney.css";

const AllJourneys = () => {
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJourneys;
