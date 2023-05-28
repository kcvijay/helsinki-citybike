import React from "react";

interface DetailListProps {
  listHeader: string;
  listDetail: string | number;
}

const StationDetailRow = ({ listHeader, listDetail }: DetailListProps) => {
  return (
    <li className="flex">
      <p>{listHeader}</p>
      <p>{listDetail}</p>
    </li>
  );
};

export default StationDetailRow;
