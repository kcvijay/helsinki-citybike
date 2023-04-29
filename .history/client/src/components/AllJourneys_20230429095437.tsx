import React from "react";
import axios from "axios";

const AllJourneys = () => {
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-6">All Journeys</h2>
      <div className="bg-white p-2">
        <table className="mx-auto w-full">
          <thead className="border border-collapse bg-slate-500 text-white ">
            <tr>
              <th className="px-4 py-2 text-left font-normal w-[180px]">
                Departure Station
              </th>
              <th className="px-4 py-2 text-center font-normal w-[180px]">
                Departure Station ID
              </th>
              <th className="px-4 py-2 text-left font-normal w-[180px]">
                Departure Time
              </th>
              <th className="px-4 py-2 text-left font-normal w-[180px]">
                Return Station
              </th>
              <th className="px-4 py-2 text-center font-normal w-[180px]">
                Return Station ID
              </th>
              <th className="px-4 py-2 text-left font-normal w-[180px]">
                Return Time
              </th>
              <th className="px-4 py-2 text-center font-normal w-[180px]">
                Distance
              </th>
              <th className="px-4 py-2 text-center font-normal w-[180px]">
                Duration
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJourneys;
