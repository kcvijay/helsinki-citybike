import React from "react";

interface TopRankProps {
  index: number;
  count: number;
  station_id: string;
  station_name: string;
}

const TopRankList = ({
  index,
  count,
  station_id,
  station_name,
}: TopRankProps) => {
  return (
    <li className="p-2 border-b w-fit border-slate-200">
      {index}. {station_name} [{station_id}]{" "}
      <span className="text-sm text-orange-500">{count} times</span>
    </li>
  );
};

export default TopRankList;
