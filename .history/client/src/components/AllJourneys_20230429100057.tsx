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
          <tbody>
            <tr className="border-b-2 border-slate-300">
              <td className="py-3 text-left" data-cell="Departure Station">
                Töölönlahti
              </td>
              <td className="py-3 text-center" data-cell="Departure Station ID">
                100
              </td>
              <td className="py-3 text-left" data-cell="Departure Time">
                01.05.2021 12:25
              </td>
              <td className="py-3 text-left" data-cell="Return Station">
                Meilahti
              </td>
              <td data-cell="Return Station ID">120</td>
              <td data-cell="Return Time">01.05.2021 12:35</td>
              <td data-cell="Distance">200 m</td>
              <td data-cell="Duration">10 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJourneys;
