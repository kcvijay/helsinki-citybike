import React from "react";

const AllStations = () => {
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">All Stations</h2>
      <table className="bg-white border border-white mx-auto w-full transition-all duration-300">
        <caption className="text-left p-3 bg-white text-slate-500 border border-white">
          Helsinki and Espoo, all stations
        </caption>
        <thead className=" border-collapse bg-orange-600 text-white">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Capacity</th>
            <th>Operator</th>
            <th>X</th>
            <th>Y</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default AllStations;
