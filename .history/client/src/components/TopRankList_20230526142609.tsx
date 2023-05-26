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
    <li className="text-sm md:text-base py-2 px-4 border-b min-w-1/2 border-[#ddd]">
      {index}. {station_name} [{station_id}]{" "}
      <span className="text-sm text-orange-500">{count} times</span>
    </li>
  );
};

export default TopRankList;
