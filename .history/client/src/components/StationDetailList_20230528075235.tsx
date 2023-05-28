import React from "react";

interface DetailListProps {
  listHeader: string;
  listDetail: string | number;
}

const StationDetailRow = ({ listHeader, listDetail }: DetailListProps) => {
  return (
    <li className="flex gap-4">
      <p className="w-full">{listHeader}</p>
      <p className="w-full">{listDetail}</p>
    </li>
  );
};

export default StationDetailRow;
