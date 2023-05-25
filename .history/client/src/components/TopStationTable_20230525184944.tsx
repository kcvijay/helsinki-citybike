import { table } from "console";
import React from "react";

interface TopRankProps {
  rank: string;
  count: number;
  station_id: string;
  station_name: string;
  station_address: string;
}

const TopRankTable = ({
  count,
  station_id,
  station_name,
  station_address,
}: TopRankProps) => {
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
          <td>
            {station_name} ({station_id})
          </td>
          <td>{station_address}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TopStationTable;
