import { table } from "console";
import React from "react";

interface TopRankProps {
  count: number;
  station_id: string;
  station_name: string;
  station_address: string;
}

const TopRankTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Station name</th>
          <th>Address</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{rank}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TopStationTable;
