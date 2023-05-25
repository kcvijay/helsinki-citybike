import React from "react";

interface TopRankProps {
  count: number;
  station_id: string;
  station_name: string;
}

const TopRankTable = ({ count, station_id, station_name }: TopRankProps) => {
  return (
    <tr>
      <td data-cell="Station name">
        {station_name} ({station_id})
      </td>
      <td data-cell="Count">{count} times</td>
    </tr>
  );
};

export default TopRankTable;
