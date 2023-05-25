import React from "react";

interface TopRankProps {
  rank: number;
  count: number;
  station_id: string;
  station_name: string;
}

const TopRankTable = ({
  rank,
  count,
  station_id,
  station_name,
}: TopRankProps) => {
  return (
    <tr>
      <td data-cell="Rank">{rank}</td>
      <td data-cell="Station name">
        {station_name} ({station_id})
      </td>
      <td data-cell="Count">{count} times</td>
    </tr>
  );
};

export default TopRankTable;
