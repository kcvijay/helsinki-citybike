import React from "react";
import axios from "axios";

const AllJourneys = () => {
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-6">All Journeys</h2>
      <div className="bg-white p-4">
        <table>
          <thead className="border border-collapse bg-slate-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Departure Station</th>
              <th className="px-4 py-2 text-center">Departure Station ID</th>
              <th className="px-4 py-2 text-left">Departure Time</th>
              <th className="px-4 py-2 text-left">Return Station</th>
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
