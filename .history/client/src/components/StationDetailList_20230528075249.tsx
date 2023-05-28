import React from "react";

interface DetailListProps {
  listHeader: string;
  listDetail: string | number;
}

const StationDetailRow = ({ listHeader, listDetail }: DetailListProps) => {
  return (
    <li className="flex gap-4 px-4 py-8">
      <p className="w-full">{listHeader}</p>
      <p className="w-full">{listDetail}</p>
    </li>
  );
};

export default StationDetailRow;
