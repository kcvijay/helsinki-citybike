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
      <td>{rank}</td>
      <td>
        {station_name} ({station_id})
      </td>
      <td>{count} times</td>
    </tr>
  );
};

export default TopRankTable;
