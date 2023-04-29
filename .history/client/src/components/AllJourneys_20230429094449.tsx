import React from "react";
import axios from "axios";

const AllJourneys = () => {
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-6">All Journeys</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJourneys;
