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
          <tbody>
            <tr>
              <td data-cell="Departure Station">Töölönlahti</td>
              <td data-cell="Departure Station ID">100</td>
              <td data-cell="Departure Time">01.05.2021 12:25</td>
              <td data-cell="Return Station">Meilahti</td>
              <td data-cell="Return Station ID">120</td>
              <td data-cell="Return Time">01.05.2021 12:35</td>
              <td data-cell="Distance">200 m</td>
              <td data-cell="Duration">10 min</td>
            </tr>
            <tr>
              <td data-cell="Departure Station">Töölönlahti</td>
              <td data-cell="Departure Station ID">100</td>
              <td data-cell="Departure Time">01.05.2021 12:25</td>
              <td data-cell="Return Station">Meilahti</td>
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
