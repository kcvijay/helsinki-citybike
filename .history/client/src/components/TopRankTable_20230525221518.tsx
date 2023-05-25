import React from "react";

interface TopRankProps {
  index: number;
  count: number;
  station_id: string;
  station_name: string;
}

const TopRankTable = ({ count, station_id, station_name }: TopRankProps) => {
  return (
    <li>
      {index} {}
    </li>
  );
};

export default TopRankTable;
