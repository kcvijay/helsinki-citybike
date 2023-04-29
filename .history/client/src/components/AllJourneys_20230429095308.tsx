import React from "react";
import axios from "axios";

const AllJourneys = () => {
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-6">All Journeys</h2>
      <div className="bg-white p-4">
        <table className="mx-auto">
          <thead className="border border-collapse bg-slate-500 text-white ">
            <tr>
              <th className="px-4 py-2 text-left font-normal">
                Departure Station
              </th>
              <th className="px-4 py-2 text-center font-normal">
                Departure Station ID
              </th>
              <th className="px-4 py-2 text-left font-normal">
                Departure Time
              </th>
              <th className="px-4 py-2 text-left font-normal">
                Return Station
              </th>
              <th className="px-4 py-2 text-center font-normal">
                Return Station ID
              </th>
              <th className="px-4 py-2 text-left font-normal">Return Time</th>
              <th className="px-4 py-2 text-center font-normal">Distance</th>
              <th className="px-4 py-2 text-center font-normal">Duration</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJourneys;
